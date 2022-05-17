import React from "react";
import { useDispatch } from "react-redux";
import { incereaseCount, decereaseCount } from "./counterSlice";

export const Button = () => {
  const dispatch = useDispatch();
  const incCount = () => {
    dispatch(incereaseCount());
  };
  const decCount = () => {
    dispatch(decereaseCount());
  };
  return (
    <div>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
    </div>
  );
};
