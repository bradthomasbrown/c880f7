import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"internalType\":\"struct Die[]\",\"name\":\"dies\",\"type\":\"tuple[]\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function mint(overload: 0, buffer: ArrayBuffer): void;
export default function mint(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
