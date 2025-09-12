import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b p-2">
            <div className="flex items-center gap-3">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-contain" />
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
        ))
      )}
    </div>
  );
}
