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
