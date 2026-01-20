import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":false,\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"}"), "outputs")]
]);
export default function deposit(overload: 0, buffer: ArrayBuffer): {};
export default function deposit(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
