import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
const initialState = {
  numOficeCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOficeCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOficeCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOficeCreams -= 1;
    });
  },
});
const { actions, reducer } = iceCreamSlice;
// console.log("iceCreamSlice reducer", iceCreamSlice.reducer);
// console.log("iceCreamSlice actions", iceCreamSlice.actions);

export const { ordered, restocked } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
