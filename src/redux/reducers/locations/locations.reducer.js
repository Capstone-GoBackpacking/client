import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  targetLocationAsync as targetLocationAsyncAction,
  targetLocation as targetLocationAction,
  toggleFavorite as toggleFavoriteAction,
} from "./locations.action";

export const targetLocationAsync = createAsyncThunk(
  "target",
  targetLocationAsyncAction
);

const initialState = {
  target: null,
  isFavorited: false,
};

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    targetLocation: targetLocationAction,
    toggleFavorite: toggleFavoriteAction,
  },
  extraReducers: (builder) => {
    builder.addCase(targetLocationAsync.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { targetLocation, toggleFavorite } = locationSlice.actions;

export default locationSlice.reducer;
