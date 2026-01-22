import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint160\",\"name\":\"amount\",\"type\":\"uint160\"},{\"internalType\":\"uint48\",\"name\":\"expiration\",\"type\":\"uint48\"},{\"internalType\":\"uint48\",\"name\":\"nonce\",\"type\":\"uint48\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0,
        param0: string,
        param1: string,
        param2: string
    ]
];
export default function allowance(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function allowance(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
