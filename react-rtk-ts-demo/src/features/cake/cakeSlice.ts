import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
  type InitialState = {
   numCakes: number;
 };
const initialState :InitialState = {
  numCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numCakes -= action.payload;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
