import { configureStore } from "@reduxjs/toolkit";
import {
  createTripReducer,
  discussionReducer,
  reviewsReducer,
} from "./reducers";

export default configureStore({
  reducer: {
    createTrip: createTripReducer,
    reviews: reviewsReducer,
    discussion: discussionReducer,
  },
});
