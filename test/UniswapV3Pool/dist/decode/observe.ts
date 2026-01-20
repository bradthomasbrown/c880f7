import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"uint32[]\",\"name\":\"secondsAgos\",\"type\":\"uint32[]\"}],\"name\":\"observe\",\"outputs\":[{\"internalType\":\"int56[]\",\"name\":\"tickCumulatives\",\"type\":\"int56[]\"},{\"internalType\":\"uint160[]\",\"name\":\"secondsPerLiquidityCumulativeX128s\",\"type\":\"uint160[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function observe(overload: 0, buffer: ArrayBuffer): {
    tickCumulatives: Array<bigint>;
    secondsPerLiquidityCumulativeX128s: Array<bigint>;
};
export default function observe(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
