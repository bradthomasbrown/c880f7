import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"fee\",\"outputs\":[{\"internalType\":\"uint24\",\"name\":\"\",\"type\":\"uint24\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function fee(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function fee(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
