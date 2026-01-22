import { mkdir, readdir, stat } from "fs/promises";
import ts, { FunctionDeclaration } from "typescript";
import { relative, join, dirname } from "path";

// command currently unused
const [,,targetPath,command,featureName,featureTemplatePath] = Bun.argv;
const distDirPath = `${targetPath}/dist`;
const srcDirPath = `${targetPath}/src`;
let srcDirExists = false as boolean;
for (const entry of await readdir(targetPath)) {
    const stats = await stat(`${targetPath}/${entry}`);
    if (entry == "src" && stats.isDirectory()) srcDirExists = true;
}
if (srcDirExists == false) throw new Error("no src dir at target path");
const abis:Array<{ name:string, path:string }> = [];
for (const entry of await readdir(srcDirPath)) {
    if (entry.match(/\.abi$/)) {
        const name = entry.slice(0, -4);
        const path = `${srcDirPath}/${entry}`;
        abis.push({ name, path });
    }
}
if (abis.length == 0) throw new Error("no abi found in src dir");
if (abis.length > 1) throw new Error("more than one abi found in src dir (multiple currently not supported");
let distDirExists = false as boolean;
for (const entry of await readdir(targetPath)) {
    const stats = await stat(`${targetPath}/${entry}`);
    if (entry == "dist" && stats.isDirectory()) distDirExists = true;
}
if (distDirExists == false) throw new Error("no dist dir at target path");
const featureDistDirPath = `${distDirPath}/${featureName}`;
const featureDistBarrelPath = `${featureDistDirPath}/${featureName}.ts`;
await mkdir(featureDistDirPath).catch(() => {});


//  ___            __  ___    __        __  
// |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
// |    \__/ | \| \__,  |  | \__/ | \| .__/


function addAbiTypeImports(
    statements:Array<ts.Statement>,
    fnName:string
) {
    statements.push(
        ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                ts.SyntaxKind.TypeKeyword,
                undefined,
                ts.factory.createNamedImports([
                    ts.factory.createImportSpecifier(
                        false,
                        undefined,
                        ts.factory.createIdentifier("ParameterOverloads")
                    )
                ])
            ),
            ts.factory.createStringLiteral(`../encode/${fnName}`, false),
            undefined
        )
    );
    statements.push(
        ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                ts.SyntaxKind.TypeKeyword,
                undefined,
                ts.factory.createNamedImports([
                    ts.factory.createImportSpecifier(
                        false,
                        undefined,
                        ts.factory.createIdentifier("ReturnOverloads")
                    )
                ])
            ),
            ts.factory.createStringLiteral(`../decode/${fnName}`, false),
            undefined
        )
    );
}

function addAbiImports(
    statements:Array<ts.Statement>,
    fnName:string
) {
    statements.push(
        ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                undefined,
                ts.factory.createIdentifier("encode"),
                undefined
            ),
            ts.factory.createStringLiteral(`../encode/${fnName}`, false),
            undefined
        )
    );
    statements.push(
        ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(
                undefined,
                ts.factory.createIdentifier("decode"),
                undefined
            ),
            ts.factory.createStringLiteral(`../decode/${fnName}`, false),
            undefined
        )
    );
}

function addFunctionOverloads(
    statements:Array<ts.Statement>,
    fnDeclaration:FunctionDeclaration,
    overloadCount:number
) {
    for(let i = 0; i < overloadCount; i++) {
        statements.push(ts.factory.createFunctionDeclaration(
            fnDeclaration.modifiers,
            undefined,
            undefined,
            undefined,
            [
                ts.factory.createParameterDeclaration(
                    undefined,
                    ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
                    "parameters",
                    undefined,
                    ts.factory.createIndexedAccessTypeNode(
                        ts.factory.createTypeReferenceNode("ParameterOverloads", undefined),
                        ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(i))
                    ),
                    undefined
                )
            ],
            ts.visitEachChild(fnDeclaration.type!, function visitor(node) {
                node = ts.visitEachChild(node, visitor, undefined);
                if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName) && node.typeName.text == "D") {
                    return ts.factory.createIndexedAccessTypeNode(
                        ts.factory.createTypeReferenceNode("ReturnOverloads", undefined),
                        ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(i))
                    )
                }
                return node;
            }, undefined),
            undefined
        ));
    }
}

function addDefaultExportToBarrel(
    statements:Array<ts.Statement>,
    name:string
) {
    statements.push(
        ts.factory.createExportDeclaration(
            undefined,
            false,
            ts.factory.createNamedExports([ts.factory.createExportSpecifier(false, "default", name)]),
            ts.factory.createStringLiteral(`./${name}`, false)
        )
    );
}

async function write(
    path:string,
    statements:Array<ts.Statement>
) {
    const result = printer.printNode(
        ts.EmitHint.SourceFile,
        ts.factory.updateSourceFile(
            ts.createSourceFile(path, "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS),
            statements,
            false,
            undefined,
            undefined,
            true,
            undefined
        ),
        ts.createSourceFile("", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    );
    await Bun.write(path, result);
}


//  ___            __  ___    __        __  
// |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
// |    \__/ | \| \__,  |  | \__/ | \| .__/ 


const { name:contractName, path:abiPath } = abis.at(0)!;
const abiJson = await Bun.file(abiPath).json();
const _6e_ = abiJson.filter((e:any) => e.type == "function");

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const oldSource = ts.createSourceFile(`${featureName}.ts`, await Bun.file(featureTemplatePath).text(), ts.ScriptTarget.ESNext, undefined, ts.ScriptKind.TS);

const barrelStatements:Array<ts.Statement> = [];
const _be_:Map<string,number> = new Map();
for (const _aa_ of _6e_) {
    if (_be_.has(_aa_.name) === false) {
        addDefaultExportToBarrel(barrelStatements, _aa_.name);
        _be_.set(_aa_.name, 1);
    } else _be_.set(_aa_.name, _be_.get(_aa_.name)! + 1);
}
for (const [name,overloadCount] of _be_) {
    const featureDistFnPath = `${featureDistDirPath}/${name}.ts`;
    const statements:Array<ts.Statement> = [];
    addAbiTypeImports(statements, name);
    addAbiImports(statements, name);
    for (const sourceStatement of oldSource.statements) {
        if (ts.isVariableStatement(sourceStatement)) {
            const firstDeclaration = sourceStatement.declarationList.declarations[0];
            const firstDeclarationName = firstDeclaration.name;
            if (!ts.isIdentifier(firstDeclarationName)) { statements.push(sourceStatement); continue; }
            if (firstDeclarationName.text == "encode" || firstDeclarationName.text == "decode") continue;
        }
        if (ts.isFunctionDeclaration(sourceStatement)) {
            if (!sourceStatement.modifiers || !sourceStatement.modifiers.some(modifier => modifier.kind == ts.SyntaxKind.ExportKeyword)) { statements.push(sourceStatement); continue; }
            addFunctionOverloads(statements, sourceStatement, overloadCount);
        }
        if (ts.isImportDeclaration(sourceStatement)) {
            if (!ts.isStringLiteral(sourceStatement.moduleSpecifier)) { statements.push(sourceStatement); continue; }
            statements.push(ts.factory.createImportDeclaration(
                sourceStatement.modifiers,
                sourceStatement.importClause,
                ts.factory.createStringLiteral(relative(join(`${targetPath}/dist`, `${featureName}/`), join(dirname(featureTemplatePath), sourceStatement.moduleSpecifier.text))),
                sourceStatement.attributes
            ));
            continue;
        }
        statements.push(sourceStatement);
    }
    const newSource = ts.factory.createSourceFile(statements, ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.None)
    const result = printer.printNode(ts.EmitHint.Unspecified, newSource, ts.createSourceFile("", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS));
    await Bun.write(featureDistFnPath, result);

}
await write(featureDistBarrelPath, barrelStatements);