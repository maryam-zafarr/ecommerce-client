import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
  extraReducers(builder) {},
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
