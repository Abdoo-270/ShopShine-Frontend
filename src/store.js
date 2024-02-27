import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import productsSlice from "./features/products/productsSlice";
import productSllice from "./features/product/productSlice";
import usersSlice from "./features/users/usersSlice";
export const store = configureStore({
  reducer: {
    userState: userReducer,
    productsState: productsSlice,
    productState: productSllice,
    usersState: usersSlice,
  },
});
