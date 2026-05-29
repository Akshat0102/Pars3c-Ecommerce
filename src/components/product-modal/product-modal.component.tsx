import type { ProductItem } from "../../shop-data";
import { useEffect } from "react";
import "./product-modal.styles.scss";

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
            <button className="add-btn">Add To Cart</button>
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
