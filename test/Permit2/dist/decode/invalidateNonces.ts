import { decode, _655c97_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint48\",\"name\":\"newNonce\",\"type\":\"uint48\"}],\"name\":\"invalidateNonces\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "outputs")]
]);
export default function invalidateNonces(overload: 0, buffer: ArrayBuffer): {};
export default function invalidateNonces(overload: number, buffer: ArrayBuffer): any {
    return decode(_ce_.get(overload), buffer);
}
