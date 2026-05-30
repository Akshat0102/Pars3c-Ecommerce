import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowUpAZ,
  ArrowDownAZ,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
} from "lucide-react";
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

  const [nameSort, setNameSort] = useState<"none" | "asc" | "desc">("none");
  const [priceSort, setPriceSort] = useState<"none" | "asc" | "desc">("none");
  const selectedCategory = SHOP_DATA.find(
    (item) => item.title.toLowerCase() === category,
  );
  const sortedProducts = selectedCategory ? [...selectedCategory.items] : [];

  if (nameSort === "asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (nameSort === "desc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (priceSort === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (priceSort === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div>
        <div className="category-header">
          <h1 className="title">{selectedCategory?.title}</h1>

          <div className="sort-actions">
            <button
              title="sort: name"
              data-tooltip="sort: name"
              onClick={() => {
                setPriceSort("none");
                setNameSort((prev) =>
                  prev === "none" ? "asc" : prev === "asc" ? "desc" : "none",
                );
              }}
            >
              {nameSort === "desc" ? (
                <ArrowDownAZ size={22} />
              ) : (
                <ArrowUpAZ size={22} />
              )}
            </button>

            <button
              title="sort: price"
              data-tooltip="sort: price"
              onClick={() => {
                setNameSort("none");
                setPriceSort((prev) =>
                  prev === "none" ? "asc" : prev === "asc" ? "desc" : "none",
                );
              }}
            >
              {priceSort === "desc" ? (
                <ArrowDownWideNarrow size={22} />
              ) : (
                <ArrowUpWideNarrow size={22} />
              )}
            </button>
          </div>
        </div>

        <div className="category-container">
          {sortedProducts.map((product) => (
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
