import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Cart from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

function Layout() {
  const location = useLocation();

  // hide Navbar on /cart and /product/:id pages
  const hideNavbar =
    location.pathname.startsWith("/cart") ||
    location.pathname.startsWith("/product/");

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
