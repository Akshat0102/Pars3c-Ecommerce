import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../../store/cart/cart.slice";
import "./cart.styles.scss";
import { Link } from "react-router-dom";
import { Trash2, PackageOpen } from "lucide-react";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <PackageOpen size={120} strokeWidth={1.2} />
          <h2>Your Cart Is Empty</h2>
          <p>
            Looks like you haven't added any delicious treats yet. Explore our
            collection and find your next favorite.
          </p>

          <Link to="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="ct-title">Your Cart</div>
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
          <div className="cart-footer">
            <button
              className="action-btn secondary"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <div className="checkout-section">
              <span className="total">Cart Total: ${totalPrice}</span>
              <button className="action-btn primary">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
