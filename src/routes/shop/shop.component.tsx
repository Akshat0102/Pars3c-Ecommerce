import { Routes, Route } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Directory />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
