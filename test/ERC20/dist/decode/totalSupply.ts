import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function totalSupply(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function totalSupply(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
