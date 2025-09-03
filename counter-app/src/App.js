import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, startSession } from "./redux/counterSlice";

function App() {
  const { value, history } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // if first increment, mark session start
    if (value === 0) {
      dispatch(startSession());
    }
    dispatch(increment());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Redux Counter with History</h1>

      {/* Counter */}
      <div className="text-5xl font-semibold mb-6">{value}</div>
      <div className="space-x-4 mb-8">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {/* History */}
      <h2 className="text-2xl font-semibold mb-4">Session History</h2>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 space-y-2">
        {history.length === 0 ? (
          <p className="text-gray-500">No sessions yet.</p>
        ) : (
          history.map((session, index) => (
            <li
              key={index}
              className="border-b last:border-0 py-2 text-sm text-gray-700"
            >
              <p><strong>Start:</strong> {session.start}</p>
              <p><strong>End:</strong> {session.end}</p>
              <p><strong>Duration:</strong> {session.duration}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
