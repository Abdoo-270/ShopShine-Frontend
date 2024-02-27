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
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const response = await customFetch.delete(`/products/${id}`);
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
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming action.payload is the id of the deleted product
        // You can update the state accordingly
        state.product = null; // Reset the product after deletion
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
