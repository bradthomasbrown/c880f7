import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"internalType\":\"struct IAllowanceTransfer.TokenSpenderPair[]\",\"name\":\"approvals\",\"type\":\"tuple[]\"}],\"name\":\"lockdown\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0,
        approvals: Array<{
            token: string;
            spender: string;
        }>
    ]
];
export default function lockdown(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function lockdown(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
