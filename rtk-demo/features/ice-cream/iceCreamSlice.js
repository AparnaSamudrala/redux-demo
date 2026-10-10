const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase("cake/ordered", (state) => {
      state.numOficeCreams -= 1;
    });
  },
});

const { actions, reducer } = iceCreamSlice;
// console.log("iceCreamSlice reducer", iceCreamSlice.reducer);
// console.log("iceCreamSlice actions", iceCreamSlice.actions);
module.exports = {
  iceCreamActions: actions,
  iceCreamReducer: reducer,
};
