import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosRequest from "../../lib/axiosRequest";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const response = await axiosRequest.get("/products");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.products = action.payload?.message;
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
