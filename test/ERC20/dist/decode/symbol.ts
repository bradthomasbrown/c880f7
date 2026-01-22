import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}"), "outputs")]
]);
export default function symbol(overload: 0, buffer: ArrayBuffer): [
    string
];
export default function symbol(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
