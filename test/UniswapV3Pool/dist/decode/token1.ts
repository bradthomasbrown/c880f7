import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"token1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function token1(overload: 0, buffer: ArrayBuffer): [
    string
];
export default function token1(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
