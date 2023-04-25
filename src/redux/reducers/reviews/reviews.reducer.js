import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  reviewsAsync as reviewsAsyncAction,
  addReview as addReviewAction,
  addVoted as addVotedAction,
} from "./reviews.action";

export const reviewsAsync = createAsyncThunk("reviews", reviewsAsyncAction);

const initialState = {
  reviews: [],
  loading: false,
  error: false,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: addReviewAction,
    addVoted: addVotedAction,
  },
  extraReducers: (builder) => {
    builder.addCase(reviewsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(reviewsAsync.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    });
    builder.addCase(reviewsAsync.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { addReview, addVoted } = reviewsSlice.actions;

export default reviewsSlice.reducer;
