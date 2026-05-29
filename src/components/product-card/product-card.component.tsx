import type { ProductItem } from "../../shop-data";
import "./product-card.styles.scss";

type ProductCardProps = {
  product: ProductItem;
  onClick: (product: ProductItem) => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { name, imageUrl } = product;

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={imageUrl || "/placeholder.png"} alt={name} />
      <div className="footer">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default ProductCard;
