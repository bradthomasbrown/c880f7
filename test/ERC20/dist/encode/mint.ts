import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"internalType\":\"struct Die[]\",\"name\":\"dies\",\"type\":\"tuple[]\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (dies: Array<{
    addr: string;
    val: bigint;
}>): ArrayBuffer {
    const _15_ = _869645_(_7b_, dies);
    return encode(_15_, dies);
}
