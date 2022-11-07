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
    removeProduct: (state, action) => {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => String(product._id) === String(id)
      );

      if (existingProduct) {
        state.products = state.products.filter(function (existingProduct) {
          return String(existingProduct._id) !== id;
        });
      }
      state.quantity -= existingProduct.quantity;
      state.totalPrice =
        state.totalPrice - existingProduct.price * existingProduct.quantity;
    },
  },
  extraReducers(builder) {},
});

export const { addProduct, addAddress, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
