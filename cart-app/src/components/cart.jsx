import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../cartSlice";

export default function Cart() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} x {item.quantity}</span>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${totalAmount}</p>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
