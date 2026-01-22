import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"wordPos\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"mask\",\"type\":\"uint256\"}],\"name\":\"invalidateUnorderedNonces\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
type ReturnOverloads = [
    void
];
export default function invalidateUnorderedNonces(overload: 0, buffer: ArrayBuffer): ReturnOverloads[0];
export default function invalidateUnorderedNonces(overload: number, buffer: ArrayBuffer): any {
    return decode(buffer, _ce_.get(overload)!);
}
export type { ReturnOverloads };
