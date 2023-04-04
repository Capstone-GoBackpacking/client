import { configureStore } from "@reduxjs/toolkit";
import { createTripReducer } from "./reducers";

export default configureStore({
  reducer: {
    createTrip: createTripReducer
  }
})
