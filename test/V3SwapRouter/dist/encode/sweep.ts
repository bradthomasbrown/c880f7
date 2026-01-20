import { encode, _655c97_, _869645_ } from "../../../../../abi/test/test";
const _df_ = JSON.parse("{\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amountMin\",\"type\":\"uint256\"}],\"outputs\":[],\"name\":\"sweep\",\"type\":\"function\"}");
const _7b_ = _655c97_(_df_, "inputs");
export default function (token: string, recipient: string, amountMin: bigint): ArrayBuffer {
    const _15_ = _869645_(_7b_, token, recipient, amountMin);
    return encode(_15_, token, recipient, amountMin);
}
