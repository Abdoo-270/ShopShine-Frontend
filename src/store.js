import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import productsSlice from "./features/products/productsSlice";
import productSllice from "./features/product/productSlice";
export const store = configureStore({
  reducer: {
    userState: userReducer,
    productsState: productsSlice,
    productState: productSllice,
  },
});
