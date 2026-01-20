import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (spender: string, amount: bigint): ArrayBuffer {
    const _15_ = _869645_(_7b_, spender, amount);
    return encode(_15_, spender, amount);
}
