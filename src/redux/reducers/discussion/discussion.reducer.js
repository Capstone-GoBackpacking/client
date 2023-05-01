import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  postsAsync as postsAsyncAction,
  addPost as addPostAction,
  addComment as addCommentAction,
} from "./discussion.action";

export const postsAsync = createAsyncThunk("discussion", postsAsyncAction);

const initialState = {
  posts: [],
  loading: false,
  error: false,
};

export const discussionSlice = createSlice({
  name: "discussion",
  initialState,
  reducers: {
    addPost: addPostAction,
    addComment: addCommentAction,
  },
  extraReducers: (builder) => {
    builder.addCase(postsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(postsAsync.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { addPost, addComment } = discussionSlice.actions;

export default discussionSlice.reducer;
