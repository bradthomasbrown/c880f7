import ts from "typescript";

function solTypeToJsType(type:string, components:any):ts.TypeNode {
    if (type == "address") return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    if (type.match(/^u?int\d+$/)) return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BigIntKeyword);
    if (type == "string") return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    if (type == "bool") return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    if (type.match(/^bytes(\d*)$/)) return ts.factory.createTypeReferenceNode("ArrayBuffer");
    if (type.endsWith(']')) {
        const _8c_ = type.match(/(.+)\[(\d*)\]$/)!;
        if (_8c_[2] != "") return ts.factory.createTupleTypeNode(Array(Number(_8c_[2])).fill(solTypeToJsType(_8c_[1], components)));
        else return ts.factory.createTypeReferenceNode("Array", [solTypeToJsType(_8c_[1], components)]);
    }
    if (type == "tuple") {
        if (components.every((e:any) => "name" in e && typeof e.name == "string" && e.name != "")) {
            return ts.factory.createTypeLiteralNode(components.map((e:any) => 
                ts.factory.createPropertySignature(
                    undefined,
                    e.name,
                    undefined,
                    solTypeToJsType(e.type, e.components)
                )
            ));
        } else {
            return ts.factory.createTupleTypeNode(components.map((e:any) => solTypeToJsType(e.type, e.components)));
        }
    }
    throw new Error(`solTypeToJsType: unhandled sol type: ${type}`);
}

export { solTypeToJsType };