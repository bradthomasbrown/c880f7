import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"tickSpacing\",\"outputs\":[{\"internalType\":\"int24\",\"name\":\"\",\"type\":\"int24\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function tickSpacing(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function tickSpacing(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
