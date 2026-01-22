import type { ParameterOverloads } from "../encode/approve";
import type { ReturnOverloads } from "../decode/approve";
import encode from "../encode/approve";
import decode from "../decode/approve";
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
