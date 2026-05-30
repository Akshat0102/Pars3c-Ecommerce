import type { ProductItem } from "../../shop-data";
import "./product-card.styles.scss";

type ProductCardProps = {
  product: ProductItem;
  onClick: (product: ProductItem) => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={imageUrl || "/placeholder.png"} alt={name} />
      <div className="footer">
        <span>{name}</span>
        <span style={{color: "white"}}>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
