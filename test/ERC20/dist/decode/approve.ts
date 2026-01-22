import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function approve(overload: 0, buffer: ArrayBuffer): void;
export default function approve(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
