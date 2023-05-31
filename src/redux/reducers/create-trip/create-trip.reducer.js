import { createSlice } from "@reduxjs/toolkit";
import {
  setValue as setValueAction,
  resetValue as resetValueAction,
} from "./create-trip.action";

const initialState = {
  type: "",
  from: "",
  to: "",
  start: "",
  end: "",
  name: "",
  slot: null,
  description: "",
  thumbnail: "",
};

export const createTripSlice = createSlice({
  name: "create-trip",
  initialState,
  reducers: {
    setValue: setValueAction,
    resetValue: resetValueAction,
  },
});

export const { setValue, resetValue } = createTripSlice.actions;

export default createTripSlice.reducer;
