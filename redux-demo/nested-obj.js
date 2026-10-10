const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const initialState = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "CA",
    zip: "12345",
  },
};

const UPDATE_ADDRESS = "UPDATE_ADDRESS";

const updateAddress = (newStreet) => {
  return {
    type: UPDATE_ADDRESS,
    payload: newStreet,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      //   return {
      //     ...state,

      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => { 
        draft.address.street = action.payload;
      });
    default:
      return state; 
  }
};

const store = createStore(reducer);

console.log("Initial state:", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState()),
);

store.dispatch(updateAddress("567 main street"));

unsubscribe();
