import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./api";

const initialState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = state.products.concat(action.payload);
    });
  },
});

export default productsSlice.reducer;
