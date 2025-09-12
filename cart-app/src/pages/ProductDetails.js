import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-6 text-center">Loading...</p>;

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
          onClick={() => dispatch(addToCart(product))}
          className="px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
