import { useState } from "react";
import { useParams } from "react-router-dom";
import SHOP_DATA from "../../shop-data";
import type { ProductItem } from "../../shop-data";
import ProductCard from "../../components/product-card/product-card.component";
import ProductModal from "../../components/product-modal/product-modal.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null,
  );
  const selectedCategory = SHOP_DATA.find(
    (item) => item.title.toLowerCase() === category,
  );

  return (
    <>
      <div>
        <h1 className="title">{selectedCategory?.title}</h1>

        <div className="category-container">
          {selectedCategory?.items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Category;
