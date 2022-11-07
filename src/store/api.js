import { createAsyncThunk } from "@reduxjs/toolkit";

const DOMAIN = "http://localhost:5000/api";

// REGISTER USER
export const register = createAsyncThunk("user/addUser", async (userData) => {
  const response = await fetch(`${DOMAIN}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to create account.");
  }
  return data;
});

// LOGIN USER
export const login = createAsyncThunk("user/loginUser", async (userData) => {
  const response = await fetch(`${DOMAIN}/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to login.");
  }
  return data;
});

// GET ALL PRODUCTS
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch(`${DOMAIN}/products`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to fetch products.");
    }
    return data;
  }
);

// ADD ORDER
export const addOrder = createAsyncThunk(
  "cart/addOrder",
  async (orderData, token) => {
    const response = await fetch(`${DOMAIN}/orders`, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        token: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to make order.");
    }
    return data;
  }
);
