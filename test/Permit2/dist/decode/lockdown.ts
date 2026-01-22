import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"internalType\":\"struct IAllowanceTransfer.TokenSpenderPair[]\",\"name\":\"approvals\",\"type\":\"tuple[]\"}],\"name\":\"lockdown\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
type ReturnOverloads = [
    void
];
export default function lockdown(overload: 0, buffer: ArrayBuffer): ReturnOverloads[0];
export default function lockdown(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
export type { ReturnOverloads };
