import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./thunks";

interface IPostsState {
  isLoading: boolean;
  current: number;
  filter?: any;
  search: string;
  data: any[];
}

const initialState: IPostsState = {
  isLoading: false,
  current: 1,
  filter: {},
  search: "",
  data: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostSearch(state, action) {
      state.search = action.payload;
    },
    setPostFilter(state, action) {
      state.data = [];
      state.current = 1;
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.current += 1;
        state.data = [...state.data, ...action.payload];
      });
  },
});

export const { setPostFilter, setPostSearch } = postsSlice.actions;
export default postsSlice.reducer;
