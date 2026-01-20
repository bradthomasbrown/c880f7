import { decode, _655c97_ } from "../../../../../abi/test/test";
const _4d_ = JSON.parse("{\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amountMin\",\"type\":\"uint256\"}],\"outputs\":[],\"name\":\"sweep\",\"type\":\"function\"}");
const _3a_ = _655c97_(_4d_, "outputs");
export default function (buffer: ArrayBuffer): {} {
    return decode(buffer, _3a_);
}
