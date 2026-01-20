import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (from: string, to: string, amount: bigint): ArrayBuffer {
    const _15_ = _869645_(_7b_, from, to, amount);
    return encode(_15_, from, to, amount);
}
