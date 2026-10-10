import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numCakes);
  const dispatch = useDispatch();
  return (
    <div>
      Cake View
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
