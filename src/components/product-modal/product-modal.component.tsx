import type { ProductItem } from "../../shop-data";
import { useEffect } from "react";
import "./product-modal.styles.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cart/cart.slice";

type ProductModalProps = {
  product: ProductItem;
  onClose: () => void;
};

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const { name, imageUrl, price } = product;
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    state.cart.cartItems.find((item) => item.id === product.id),
  );
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-section">
          <img src={imageUrl || "/placeholder.png"} alt={name} />
        </div>

        <div className="details-section">
          <h2>{name}</h2>
          <p>Rich artisan quality product crafted with premium ingredients.</p>
          <div className="bottom-section">
            <span className="price">${price}</span>
            <button
              className="add-btn quantity-btn"
              onClick={() => {
                if (quantity === 0) {
                  dispatch(addItem(product));
                }
              }}
            >
              {quantity === 0 ? (
                "Add To Cart"
              ) : (
                <div className="qty-wrapper">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(decreaseQuantity(product.id));
                    }}
                  >
                    −
                  </span>

                  <span className="qty">{quantity}</span>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(increaseQuantity(product.id));
                    }}
                  >
                    +
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
