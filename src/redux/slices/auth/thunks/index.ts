"use client";

import {
  generateToken,
  verifyToken as requestVerifyToken,
} from "@/utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const basicLogin = createAsyncThunk(
  "auth/basic-login",
  async (payload: any = {}, { rejectWithValue }) => {
    const { email, password } = payload;

    if (!email || !password) {
      return rejectWithValue("Missing required field!");
    }

    // Simulate the authentication here
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const userInfor = data.find(
      (e: any) => e.email.toLowerCase() === email.toLowerCase()
    );
    const isPasswordCorrect = password === "123";

    if (userInfor && isPasswordCorrect) {
      // Login successfully
      const token = generateToken(userInfor);
      localStorage.setItem("token", token);

      return { ...userInfor, token };
    } else {
      return rejectWithValue("Username or password is incorrect!");
    }
  },
  {}
);

export const verifyToken = createAsyncThunk(
  "auth/verify-token",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("Token is missing!");
    }

    // Simulate verify token
    const userInfo = await requestVerifyToken(token);

    if (userInfo) {
      // Login successfully
      return { ...userInfo, token };
    } else {
      return rejectWithValue("Username or password is incorrect!");
    }
  },
  {}
);
