import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/auth";
import postsReducer from "../slices/posts";
import usersReducer from "../slices/users";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
