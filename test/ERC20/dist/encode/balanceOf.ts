import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function balanceOf(includeSelector: boolean, overload: 0, param0: string): ArrayBuffer;
export default function balanceOf(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
