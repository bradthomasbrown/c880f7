import type { ParameterOverloads } from "../encode/DOMAIN_SEPARATOR";
import type { ReturnOverloads } from "../decode/DOMAIN_SEPARATOR";
import encode from "../encode/DOMAIN_SEPARATOR";
import decode from "../decode/DOMAIN_SEPARATOR";
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
