import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"liquidity\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"\",\"type\":\"uint128\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function liquidity(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function liquidity(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
