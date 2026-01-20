import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"int24\",\"name\":\"tickLower\",\"type\":\"int24\"},{\"internalType\":\"int24\",\"name\":\"tickUpper\",\"type\":\"int24\"}],\"name\":\"snapshotCumulativesInside\",\"outputs\":[{\"internalType\":\"int56\",\"name\":\"tickCumulativeInside\",\"type\":\"int56\"},{\"internalType\":\"uint160\",\"name\":\"secondsPerLiquidityInsideX128\",\"type\":\"uint160\"},{\"internalType\":\"uint32\",\"name\":\"secondsInside\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function snapshotCumulativesInside(overload: 0, buffer: ArrayBuffer): {
    tickCumulativeInside: bigint;
    secondsPerLiquidityInsideX128: bigint;
    secondsInside: bigint;
};
export default function snapshotCumulativesInside(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
