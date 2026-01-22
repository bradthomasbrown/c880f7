import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0
    ]
];
export default function DOMAIN_SEPARATOR(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function DOMAIN_SEPARATOR(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
