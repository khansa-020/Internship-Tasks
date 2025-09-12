import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 1000, img: "https://via.placeholder.com/150", description: "Powerful laptop for work and gaming." },
  { id: 2, name: "Phone", price: 500, img: "https://via.placeholder.com/150", description: "Smartphone with amazing features." },
  { id: 3, name: "Headphones", price: 200, img: "https://via.placeholder.com/150", description: "Noise-cancelling headphones." },
];

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/product/${p.id}`}
          className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
        >
          <img src={p.img} alt={p.name} className="w-full h-32 object-cover rounded" />
          <h2 className="text-lg font-bold mt-2">{p.name}</h2>
          <p className="text-gray-600">${p.price}</p>
        </Link>
      ))}
    </div>
  );
}

export { products };
