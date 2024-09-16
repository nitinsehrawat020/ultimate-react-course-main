import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemsquantity, increaseItemsquantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuatity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemsquantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuatity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemsquantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
