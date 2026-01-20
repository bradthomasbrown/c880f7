import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":false,\"inputs\":[{\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function withdraw(overload: 0, buffer: ArrayBuffer): {};
export default function withdraw(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
