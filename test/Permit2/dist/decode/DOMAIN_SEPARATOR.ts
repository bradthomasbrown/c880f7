import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "outputs")]
]);
export default function DOMAIN_SEPARATOR(overload: 0, buffer: ArrayBuffer): [
    ArrayBuffer
];
export default function DOMAIN_SEPARATOR(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
