import { encode, _655c97_, _869645_ } from "@bradthomasbrown/abi";
const _ce_ = new Map([
    [0, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.TokenPermissions\",\"name\":\"permitted\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.PermitTransferFrom\",\"name\":\"permit\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"requestedAmount\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.SignatureTransferDetails\",\"name\":\"transferDetails\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"witness\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"witnessTypeString\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"permitWitnessTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")],
    [1, _655c97_(JSON.parse("{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.TokenPermissions[]\",\"name\":\"permitted\",\"type\":\"tuple[]\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.PermitBatchTransferFrom\",\"name\":\"permit\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"requestedAmount\",\"type\":\"uint256\"}],\"internalType\":\"struct ISignatureTransfer.SignatureTransferDetails[]\",\"name\":\"transferDetails\",\"type\":\"tuple[]\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"witness\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"witnessTypeString\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"permitWitnessTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}"), "inputs")]
]);
type ParameterOverloads = [
    [
        overload: 0,
        permit: {
            permitted: {
                token: string;
                amount: bigint;
            };
            nonce: bigint;
            deadline: bigint;
        },
        transferDetails: {
            to: string;
            requestedAmount: bigint;
        },
        owner: string,
        witness: ArrayBuffer,
        witnessTypeString: string,
        signature: ArrayBuffer
    ],
    [
        overload: 0,
        permit: {
            permitted: Array<{
                token: string;
                amount: bigint;
            }>;
            nonce: bigint;
            deadline: bigint;
        },
        transferDetails: Array<{
            to: string;
            requestedAmount: bigint;
        }>,
        owner: string,
        witness: ArrayBuffer,
        witnessTypeString: string,
        signature: ArrayBuffer
    ]
];
export default function permitWitnessTransferFrom(includeSelector: boolean, ...parameters: ParameterOverloads[0]): ArrayBuffer;
export default function permitWitnessTransferFrom(includeSelector: boolean, ...parameters: ParameterOverloads[1]): ArrayBuffer;
export default function permitWitnessTransferFrom(includeSelector: boolean, overload: number, ...parameters: any): ArrayBuffer {
    return encode(includeSelector, _869645_(_ce_.get(overload)!, parameters), parameters);
}
export type { ParameterOverloads };
