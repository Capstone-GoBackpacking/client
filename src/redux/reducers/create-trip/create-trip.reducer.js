import { createSlice } from "@reduxjs/toolkit";
import { setValue as setValueAction } from "./create-trip.action";

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
  },
});

export const { setValue } = createTripSlice.actions;

export default createTripSlice.reducer;
