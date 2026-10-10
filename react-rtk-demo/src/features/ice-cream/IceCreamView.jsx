import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
export const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOficeCreams);
  const dispatch = useDispatch();
  return (
    <div>
      Ice Cream View
      <h2>Num of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order Ice Cream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Ice Creams</button>
    </div>
  );
};
