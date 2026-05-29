import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component"),
);

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
