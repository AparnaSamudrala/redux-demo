const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/ice-cream/iceCreamSlice").iceCreamActions;
const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
console.log("Initial state", store.getState().user);
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState().user);
});
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(3));
// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.restocked(6));
// //store.dispatch(cakeActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.ordered(1));
// store.dispatch(iceCreamActions.restocked(3));
store.dispatch(fetchUsers());
setTimeout(() => unsubscribe(), 2000);
