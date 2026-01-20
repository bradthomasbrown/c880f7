import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":false,\"inputs\":[{\"name\":\"guy\",\"type\":\"address\"},{\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function approve(overload: 0, buffer: ArrayBuffer): [
    boolean
];
export default function approve(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
