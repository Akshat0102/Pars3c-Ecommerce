import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../store/cart/cart.slice";
import "./cart.styles.scss";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <div className="title">Your Cart</div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-content">
                  <div className="item-left">
                    <h3>{item.name}</h3>
                    <button className="qty-btn">
                      <div className="qty-wrapper">
                        <span
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          −
                        </span>
                        <span className="qty">{item.quantity}</span>
                        <span
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="item-right">
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <Trash2 size={24} />
                    </button>
                    <span className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
