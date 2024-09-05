import { createSlice } from "@reduxjs/toolkit";
import { basicLogin, verifyToken } from "./thunks";

interface IAuthState {
  isLoading: boolean;
  authenticate: {
    id?: number;
    email?: string;
    token?: string;
  };
  errorMessage: string;
}

const initialState: IAuthState = {
  isLoading: false,
  authenticate: {},
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(basicLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(basicLogin.fulfilled, (state, action) => {
        const { id, email, token, ...rest } = action.payload;
        state.isLoading = false;
        state.authenticate = {
          id,
          email: email.toLowerCase(),
          token,
          ...rest,
        };
      })
      .addCase(basicLogin.rejected, (state, action) => {
        const errorMessage = action.payload as string;
        state.isLoading = false;
        state.errorMessage = errorMessage;
      })
      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        const { id, email, ...rest } = action.payload;
        state.isLoading = false;
        state.authenticate = {
          ...state.authenticate,
          id,
          email: email.toLowerCase(),
          ...rest,
        };
      })
      .addCase(verifyToken.rejected, (state) => {
        state.isLoading = false;
        state.authenticate = {};
        state.errorMessage = "";
      });
  },
});

export default authSlice.reducer;
