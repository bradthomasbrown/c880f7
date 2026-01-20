import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"V3_POSITION_MANAGER\",\"outputs\":[{\"internalType\":\"contract INonfungiblePositionManager\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function V3_POSITION_MANAGER(overload: 0, buffer: ArrayBuffer): [
    string
];
export default function V3_POSITION_MANAGER(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
