import { solTypeToJsType } from "./lib";
import { mkdir, readdir, stat } from "fs/promises";
import ts from "typescript";

const [,,targetPath] = Bun.argv;
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


//  ___            __  ___    __        __  
// |__  |  | |\ | /  `  |  | /  \ |\ | /__` 
// |    \__/ | \| \__,  |  | \__/ | \| .__/


function addDefaultExportToBarrel(
    statements:Array<ts.Statement>,
    name:string,
    kind:"encode"|"decode"
) {
    statements.push(
        ts.factory.createExportDeclaration(
            undefined,
            false,
            ts.factory.createNamedExports([ts.factory.createExportSpecifier(false, "default", name)]),
            ts.factory.createStringLiteral(`./${kind}/${name}`, false)
        )
    );
}

function addImportToFunctionFile(
    statements:Array<ts.Statement>,
    kind:"encode"|"decode"
) {
    const importSpecifiers:Array<ts.ImportSpecifier> = [];
    importSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(kind)));
    importSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("_655c97_")));
    if (kind == "encode") importSpecifiers.push(ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier("_869645_")));
    statements.push(
        ts.factory.createImportDeclaration(
            undefined,
            ts.factory.createImportClause(undefined, undefined, ts.factory.createNamedImports(importSpecifiers)),
            ts.factory.createStringLiteral("@bradthomasbrown/abi", false),
            undefined
        )
    );
}

function add655c97Map(
    statements:Array<ts.Statement>,
    _ff_:Set<any>,
    kind:"inputs"|"outputs"
) {
    const keyValuePairs:Array<ReturnType<typeof ts["factory"]["createArrayLiteralExpression"]>> = [];
    let i = 0; for (const _6e_ of _ff_) {
        keyValuePairs.push(ts.factory.createArrayLiteralExpression([
            ts.factory.createNumericLiteral(i, undefined),
            ts.factory.createCallExpression(
                ts.factory.createIdentifier("_655c97_"),
                undefined,
                [
                    ts.factory.createCallExpression(
                        ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("JSON"), "parse"),
                        undefined,
                        [ts.factory.createStringLiteral(JSON.stringify(_6e_))]
                    ),
                    ts.factory.createStringLiteral(kind)
                ]
            )
        ], false));
        i++;
    }
    statements.push(
        ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        "_ce_",
                        undefined,
                        undefined,
                        ts.factory.createNewExpression(
                            ts.factory.createIdentifier("Map"),
                            undefined,
                            [ts.factory.createArrayLiteralExpression(keyValuePairs, true)]
                        )
                    )
                ],
                ts.NodeFlags.Const
            )
        )
    );
}

function addEncodeOverloadDeclarations(
    statements:Array<ts.Statement>,
    name:string,
    _24_:Set<any>
) {
    let i = 0; for (const _57_ of _24_) {
        statements.push(ts.factory.createFunctionDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword), ts.factory.createToken(ts.SyntaxKind.DefaultKeyword)],
            undefined,
            name,
            undefined,
            [
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    "includeSelector",
                    undefined,
                    ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
                ),
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    "overload",
                    undefined,
                    ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(i)),
                    undefined
                ),
                ..._57_.inputs.map((input:any, i:number) =>
                    ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        !input.name ? `param${i}` : input.name,
                        undefined,
                        solTypeToJsType(input.type, input.components),
                        undefined
                    )
                )
            ],
            ts.factory.createTypeReferenceNode("ArrayBuffer"),
            undefined
        ));
        i++;
    }
};

function addEncodeFunctionImplementation(
    statements:Array<ts.Statement>,
    name:string,
    _35_:Set<any>
) {
    statements.push(ts.factory.createFunctionDeclaration(
        [ts.factory.createToken(ts.SyntaxKind.ExportKeyword), ts.factory.createToken(ts.SyntaxKind.DefaultKeyword)],
        undefined,
        name,
        undefined,
        [
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                "includeSelector",
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
            ),
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                "overload",
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
            ),
            ts.factory.createParameterDeclaration(
                undefined,
                ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
                "parameters",
                undefined,
                ts.factory.createToken(ts.SyntaxKind.AnyKeyword),
                undefined
            )
        ],
        ts.factory.createTypeReferenceNode("ArrayBuffer"),
        ts.factory.createBlock([
            ts.factory.createReturnStatement(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("encode"),
                    undefined,
                    [
                        ts.factory.createIdentifier("includeSelector"),
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("_869645_"),
                            undefined,
                            [
                                ts.factory.createNonNullExpression(
                                    ts.factory.createCallExpression(
                                        ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("_ce_"), "get"),
                                        undefined,
                                        [ts.factory.createIdentifier("overload")]
                                    )
                                ),
                                ts.factory.createIdentifier("parameters")
                            ]
                        ),
                        ts.factory.createIdentifier("parameters")
                    ]
                )
            )
        ], true)
    ));
}

function addDecodeOverloadDeclarations(
    statements:Array<ts.Statement>,
    name:string,
    _ec_:Set<any>
) {
    let i = 0; for (const _b8_ of _ec_) {
        statements.push(ts.factory.createFunctionDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword), ts.factory.createToken(ts.SyntaxKind.DefaultKeyword)],
            undefined,
            name,
            undefined,
            [
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    "overload",
                    undefined,
                    ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(i)),
                    undefined
                ),
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    "buffer",
                    undefined,
                    ts.factory.createTypeReferenceNode("ArrayBuffer", undefined),
                    undefined
                )
            ],
            solTypeToJsType("tuple", _b8_.outputs),
            undefined
        ));
        i++;
    }
}

function addDecodeFunctionImplementation(
    statements:Array<ts.Statement>,
    name:string,
    _26_:Set<any>
) {
    statements.push(ts.factory.createFunctionDeclaration(
        [ts.factory.createToken(ts.SyntaxKind.ExportKeyword), ts.factory.createToken(ts.SyntaxKind.DefaultKeyword)],
        undefined,
        name,
        undefined,
        [
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                "overload",
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
            ),
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                "buffer",
                undefined,
                ts.factory.createTypeReferenceNode("ArrayBuffer", undefined),
                undefined
            )
        ],
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
        ts.factory.createBlock([
            ts.factory.createReturnStatement(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("decode"),
                    undefined,
                    [
                        ts.factory.createIdentifier("buffer"),
                        ts.factory.createCallExpression(
                            ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("_ce_"), "get"),
                            undefined,
                            [ts.factory.createIdentifier("overload")]
                        ),
                    ]
                )
            )
        ], true)
    ));
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


const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const { name:contractName, path:abiPath } = abis.at(0)!;
const modulePath = `${distDirPath}/${contractName}.ts`;
const encodeDirPath = `${distDirPath}/encode`;
const decodeDirPath = `${distDirPath}/decode`;
const encodeBarrelPath = `${distDirPath}/encode.ts`;
const decodeBarrelPath = `${distDirPath}/decode.ts`;
await mkdir(distDirPath).catch(() => {});
await mkdir(encodeDirPath).catch(() => {});
await mkdir(decodeDirPath).catch(() => {});
const abiJson = await Bun.file(abiPath).json();
// abi objects that are of type 'function'
const _f0_ = abiJson.filter((e:any) => e.type == "function");

// create encode barrel statements
const encodeBarrelStatements:ts.Statement[] = [];
const decodeBarrelStatements:ts.Statement[] = [];

const _83_:Map<string,Set<any>> = new Map();

for (const _aa_ of _f0_) {
    if (_83_.has(_aa_.name) === false) {
        addDefaultExportToBarrel(encodeBarrelStatements, _aa_.name, "encode");
        addDefaultExportToBarrel(decodeBarrelStatements, _aa_.name, "decode");
        _83_.set(_aa_.name, new Set([_aa_]));
    } else {
        _83_.get(_aa_.name)!.add(_aa_);
    }
}
await write(encodeBarrelPath, encodeBarrelStatements);
await write(decodeBarrelPath, decodeBarrelStatements);

for (const [name, _42_] of _83_) {
    const fnEncodePath = `${encodeDirPath}/${name}.ts`;
    const fnDecodePath = `${decodeDirPath}/${name}.ts`;
    const fnEncodeStatements:Array<ts.Statement> = [];
    const fnDecodeStatements:ts.Statement[] = [];
    addImportToFunctionFile(fnEncodeStatements, "encode");
    add655c97Map(fnEncodeStatements, _42_, "inputs");
    addEncodeOverloadDeclarations(fnEncodeStatements, name, _42_);
    addEncodeFunctionImplementation(fnEncodeStatements, name, _42_);
    await write(fnEncodePath, fnEncodeStatements);
    addImportToFunctionFile(fnDecodeStatements, "decode");
    add655c97Map(fnDecodeStatements, _42_, "outputs");
    addDecodeOverloadDeclarations(fnDecodeStatements, name, _42_);
    addDecodeFunctionImplementation(fnDecodeStatements, name, _42_);
    await write(fnDecodePath, fnDecodeStatements);
}

await Bun.write(
    modulePath,
    printer.printNode(
        ts.EmitHint.SourceFile,
        ts.factory.updateSourceFile(
            ts.createSourceFile(modulePath, "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS),
            [
                ts.factory.createExportDeclaration(
                    undefined,
                    false,
                    ts.factory.createNamespaceExport(
                        ts.factory.createIdentifier("encode")
                    ),
                    ts.factory.createStringLiteral("./encode", false),
                    undefined
                ),
                ts.factory.createExportDeclaration(
                    undefined,
                    false,
                    ts.factory.createNamespaceExport(
                        ts.factory.createIdentifier("decode")
                    ),
                    ts.factory.createStringLiteral("./decode", false),
                    undefined
                )
            ],
            false,
            undefined,
            undefined,
            true,
            undefined
        ),
        ts.createSourceFile("", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    )
);