import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalPrice: 0,
  address: "22A Sterling Street",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += Number(action.payload.quantity);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { addProduct, addAddress } = cartSlice.actions;

export default cartSlice.reducer;
