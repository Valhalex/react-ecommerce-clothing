import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
