import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function balanceOf(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function balanceOf(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
