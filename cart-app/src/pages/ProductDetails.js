import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from ".././cartSlice";
import { products } from "./Home";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow">
      <img src={product.img} alt={product.name} className="w-full h-60 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={() => dispatch(addItem(product))}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}
