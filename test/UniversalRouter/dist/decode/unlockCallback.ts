import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"unlockCallback\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function unlockCallback(overload: 0, buffer: ArrayBuffer): [
    ArrayBuffer
];
export default function unlockCallback(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
