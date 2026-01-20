import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"observations\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"blockTimestamp\",\"type\":\"uint32\"},{\"internalType\":\"int56\",\"name\":\"tickCumulative\",\"type\":\"int56\"},{\"internalType\":\"uint160\",\"name\":\"secondsPerLiquidityCumulativeX128\",\"type\":\"uint160\"},{\"internalType\":\"bool\",\"name\":\"initialized\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function observations(overload: 0, buffer: ArrayBuffer): {
    blockTimestamp: bigint;
    tickCumulative: bigint;
    secondsPerLiquidityCumulativeX128: bigint;
    initialized: boolean;
};
export default function observations(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
