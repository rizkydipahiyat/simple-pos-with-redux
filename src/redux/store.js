import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";

const reducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const store = configureStore({
  reducer,
});

console.log("oncreate store:", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE:", store.getState());
});

export default store;
