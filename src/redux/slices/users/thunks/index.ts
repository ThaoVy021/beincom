import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "users/get-all",
  async () => {
    // Too small to pagination
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
  },
  {}
);

export const fetchUserById = createAsyncThunk(
  "users/get-by-id",
  async (payload: any = {}) => {
    const { id } = payload;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    return data;
  },
  {}
);
