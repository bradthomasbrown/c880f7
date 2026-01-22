import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"internalType\":\"struct Die[]\",\"name\":\"dies\",\"type\":\"tuple[]\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
export default function mint(includeSelector: boolean, overload: 0, dies: Array<{
    addr: string;
    val: bigint;
}>): ArrayBuffer;
export default function mint(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
