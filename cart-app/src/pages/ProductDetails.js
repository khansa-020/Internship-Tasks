import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) return <p className="p-6 text-center">Product not found</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-80 h-80 object-contain border rounded-lg shadow-md"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">
          {product.title}
        </h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>

        <button
          onClick={() => {
            dispatch(addToCart(product));
            alert(`${product.title} added to cart ✅`);
          }}
          className="px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
