import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      Cake View
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};
