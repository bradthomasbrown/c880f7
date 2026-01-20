import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function decimals(overload: 0, buffer: ArrayBuffer): [
    bigint
];
export default function decimals(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
