import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cartSlice";

export default function CartModal({ onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h1 className="text-2xl font-bold mb-4 text-indigo-600">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decrease(item.id))}
                    className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increase(item.id))}
                    className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
