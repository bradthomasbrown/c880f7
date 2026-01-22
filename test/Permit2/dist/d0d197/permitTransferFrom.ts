import type { ParameterOverloads } from "../encode/permitTransferFrom";
import type { ReturnOverloads } from "../decode/permitTransferFrom";
import encode from "../encode/permitTransferFrom";
import decode from "../decode/permitTransferFrom";
declare const vm: any;
export default function (...parameters: ParameterOverloads[0]): [
    bigint,
    ReturnOverloads[0]
];
export default function (...parameters: ParameterOverloads[1]): [
    bigint,
    ReturnOverloads[1]
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
