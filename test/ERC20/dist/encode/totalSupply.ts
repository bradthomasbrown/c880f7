import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (): ArrayBuffer {
    const _15_ = _869645_(_7b_);
    return encode(_15_);
}
