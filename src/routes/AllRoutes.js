import { Route, Routes } from "react-router-dom";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Home } from "../pages/Home";
import { Result } from "../pages/Result";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="/" element={<Home />} />
        <Route path="search-results" element={<Result />} />
      </Routes>
    </div>
  );
};
