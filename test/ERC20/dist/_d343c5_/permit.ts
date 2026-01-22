import type { ParameterOverloads } from ../encode/permit;
import type { ReturnOverloads } from ../decode/permit;
import encode from ../encode/permit;
import decode from ../decode/permit;
declare const vm: any;
export default function (...parameters: ParameterOverloads[0]): ReturnOverloads[0];
export default function (...parameters: ParameterOverloads[1]): ReturnOverloads[1];
export default function (overload: number, ...parameters: any): any {
    const buffer = encode(true, overload, parameters);
    const context = vm.run(buffer);
    const result = decode(overload, context.returndata);
    return result ? (result instanceof Array && result.length == 1 ? result[0] : result) : result;
}
