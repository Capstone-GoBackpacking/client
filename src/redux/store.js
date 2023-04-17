import { configureStore } from "@reduxjs/toolkit";
import { createTripReducer, reviewsReducer } from "./reducers";

export default configureStore({
  reducer: {
    createTrip: createTripReducer,
    reviews: reviewsReducer,
  },
});
