import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../store/hooks";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const itemCount = useAppSelector(selectCartCount);
  const navigate = useNavigate();
  return (
    <div className="cart-icon" onClick={() => navigate("/cart")}>
      <ShoppingCart size={26} />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
