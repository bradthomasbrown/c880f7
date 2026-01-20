import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (param0: string, param1: string): ArrayBuffer {
    const _15_ = _869645_(_7b_, param0, param1);
    return encode(_15_, param0, param1);
}
