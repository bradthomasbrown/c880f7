import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint48\",\"name\":\"newNonce\",\"type\":\"uint48\"}],\"name\":\"invalidateNonces\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0,
        token: string,
        spender: string,
        newNonce: bigint
    ]
];
export default function invalidateNonces(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function invalidateNonces(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
