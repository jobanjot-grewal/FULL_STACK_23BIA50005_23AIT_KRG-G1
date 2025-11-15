import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Count: {count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 rounded-xl shadow border hover:scale-105 transition"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="px-4 py-2 rounded-xl shadow border hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 rounded-xl shadow border hover:scale-105 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
