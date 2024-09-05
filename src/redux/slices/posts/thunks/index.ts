import cleanUndefinedFields from "@/utils/objects/cleanUndefinedFields";
import sleep from "@/utils/sleep";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "posts/get",
  async (payload: any = {}, { getState }) => {
    await sleep(1000);
    const { current, pageSize = 5 } = payload;
    const state: any = getState();
    const filter = state.posts.filter;

    const offset = ((current ?? state.posts.current) - 1) * pageSize;

    const query: any = {
      _start: offset,
      _limit: pageSize,
      ...filter,
    };
    cleanUndefinedFields(query);
    const queryString = new URLSearchParams(query).toString();

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${queryString}`
    );

    const data = await response.json();

    // Get users info
    // dispatch(fetchAllUsers());

    for (const post of data) {
      post.user = (state.users.data ?? []).find(
        (e: any) => e.id === post.userId
      );
    }

    return data;
  },
  {}
);
