import { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../pages/CartPage";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="text-white font-bold text-lg">Home</Link>
        <button
          onClick={() => setShowCart(true)}
          className="text-white font-bold text-lg"
        >
          Cart
        </button>
      </div>

      {/* Show Cart Popup */}
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </div>
  );
}
