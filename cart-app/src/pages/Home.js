import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 6;
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-contain"
            />
            <h2 className="mt-2 font-semibold">{p.title}</h2>
            <p className="text-gray-600">${p.price}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  dispatch(addToCart(p));
                  alert(`${p.title} added to cart ✅`);
                }}
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                Add to Cart
              </button>
              <Link
                to={`/product/${p.id}`}
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * productsPerPage >= products.length}
          className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
