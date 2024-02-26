import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils";
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    try {
      const response = await customFetch.get(`/products/${id}`);
      const product = response.data.product;
      return product;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (id, data) => {
    try {
      const response = await customFetch.patch(`/products/${id}`, data);
      console.log(response);
      return product;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  product: null,
  loading: true,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
