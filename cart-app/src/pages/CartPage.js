import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from ".././cartSlice";

export default function CartPage() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <p className="font-bold text-lg mt-4">Total: ${totalAmount}</p>
        </div>
      )}
    </div>
  );
}
