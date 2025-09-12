import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map(p => (
        <div key={p.id} className="p-4 bg-white shadow rounded-2xl flex flex-col items-center">
          <h2 className="text-lg font-bold">{p.name}</h2>
          <p className="text-gray-600">${p.price}</p>
          <button
            onClick={() => dispatch(addItem(p))}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
