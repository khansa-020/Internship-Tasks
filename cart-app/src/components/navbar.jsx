import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-white font-bold text-lg">Home</Link>
      <Link to="/cart" className="text-white font-bold text-lg">Cart</Link>
    </div>
  );
}
