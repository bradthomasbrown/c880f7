import type { ParameterOverloads } from "../encode/invalidateUnorderedNonces";
import type { ReturnOverloads } from "../decode/invalidateUnorderedNonces";
import encode from "../encode/invalidateUnorderedNonces";
import decode from "../decode/invalidateUnorderedNonces";
declare const vm: any;
export default function (...parameters: ParameterOverloads[0]): [
    bigint,
    ReturnOverloads[0]
];
export default function <D>(overload: number, ...parameters: any): [
    bigint,
    D
] {
    const buffer = (encode as (...a: any) => ArrayBuffer)(true, overload, ...parameters);
    const context = vm.run(buffer);
    const result = (decode as (...a: any) => D)(overload, context.returndata);
    return [context.gasUsed, result];
}
