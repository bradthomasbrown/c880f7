import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
export default function approve(includeSelector: boolean, overload: 0, spender: string, amount: bigint): ArrayBuffer;
export default function approve(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
