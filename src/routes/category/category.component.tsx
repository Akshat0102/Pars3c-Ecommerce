import { useParams } from "react-router-dom";
import SHOP_DATA from "../../shop-data";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const selectedCategory = SHOP_DATA.find(
    (item) => item.title.toLowerCase() === category,
  );

  return (
    <div>
      <h1 className="title">{selectedCategory?.title}</h1>

      <div className="category-container">
        {selectedCategory?.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
