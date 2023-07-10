import React, { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center gap-x-2">
        <button
          onClick={() => dispatch(decrement())}
          className="border p-1 bg-slate-200"
        >
          -
        </button>
        <p className="border p-1 bg-slate-200">{count}</p>
        <button
          onClick={() => dispatch(increment())}
          className="border p-1 bg-slate-200"
        >
          +
        </button>
      </div>

      <div className="flex">
        <input
          className=""
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button
          className=""
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount || 0)))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Home;
