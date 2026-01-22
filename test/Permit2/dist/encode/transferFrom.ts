import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint160\",\"name\":\"amount\",\"type\":\"uint160\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"internalType\":\"struct IAllowanceTransfer.AllowanceTransferDetails[]\",\"name\":\"transferDetails\",\"type\":\"tuple[]\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")],
    [1, _655c97_(JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint160\",\"name\":\"amount\",\"type\":\"uint160\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0,
        transferDetails: Array<{
            from: string;
            to: string;
            amount: bigint;
            token: string;
        }>
    ],
    [
        overload: 0,
        from: string,
        to: string,
        amount: bigint,
        token: string
    ]
];
export default function transferFrom(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function transferFrom(includeSelector: boolean, ...parameters: ParameterOverloads[1]): ArrayBuffer;
export default function transferFrom(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
