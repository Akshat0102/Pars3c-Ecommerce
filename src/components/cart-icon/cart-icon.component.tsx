import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../../store/hooks";
import { selectCartCount } from "../../store/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const itemCount = useAppSelector(selectCartCount);

  return (
    <div className="cart-icon">
      <ShoppingCart size={26} />
      {itemCount > 0 && <span className="item-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
