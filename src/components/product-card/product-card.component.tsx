import type { ProductItem } from "../../shop-data";

import "./product-card.styles.scss";

type ProductCardProps = {
  product: ProductItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl || "/placeholder.png"} alt={name} />
      <div className="footer">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default ProductCard;
