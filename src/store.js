import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import productSlice from "./features/product/productSlice";
export const store = configureStore({
  reducer: {
    userState: userReducer,
    productState: productSlice,
  },
});
