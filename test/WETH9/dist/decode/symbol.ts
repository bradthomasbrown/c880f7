import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function symbol(overload: 0, buffer: ArrayBuffer): [
    string
];
export default function symbol(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
