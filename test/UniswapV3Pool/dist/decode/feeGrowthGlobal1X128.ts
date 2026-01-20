import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"feeGrowthGlobal1X128\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function feeGrowthGlobal1X128(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function feeGrowthGlobal1X128(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
