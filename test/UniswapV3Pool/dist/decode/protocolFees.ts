import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"protocolFees\",\"outputs\":[{\"internalType\":\"uint128\",\"name\":\"token0\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"token1\",\"type\":\"uint128\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
export default function protocolFees(overload: 0, buffer: ArrayBuffer): {
    token0: bigint;
    token1: bigint;
};
export default function protocolFees(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
