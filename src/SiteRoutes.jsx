import { Route, Routes } from "react-router-dom";
import Fav from "./Fav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PagesNotFound from "./pages/PagesNotFound";
import PrivateRoute from "./PrivateRoute";
import { Category, Products, ProductsLayout, Product } from "./products";

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index={true} element={<Products />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/fav"
          element={
            <PrivateRoute>
              <Fav />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
