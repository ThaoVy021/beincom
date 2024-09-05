import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./thunks";

interface IUsersState {
  isLoading: boolean;
  data: any[];
}

const initialState: IUsersState = {
  isLoading: false,
  data: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...action.payload];
      });
  },
});

export default usersSlice.reducer;
