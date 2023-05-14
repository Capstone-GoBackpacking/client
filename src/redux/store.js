import { configureStore } from "@reduxjs/toolkit";
import {
  createTripReducer,
  discussionReducer,
  reviewsReducer,
  locationReducer,
} from "./reducers";

export default configureStore({
  reducer: {
    createTrip: createTripReducer,
    reviews: reviewsReducer,
    discussion: discussionReducer,
    location: locationReducer,
  },
});
