import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { initialState } from "./variants.initState";

const variantsSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {
    addSelected: (state, { payload }) => {
      console.log("🚀 ~ file: variants.slice.js:11 ~ payload:", payload);
      state.selectedID.push(payload);
    },
  },
});
export const { addSelected } = variantsSlice.actions;

const persistConfig = {
  key: "selectedID",
  storage,
  whitelist: ["selectedID"],
};
export const variantsReducer = persistReducer(
  persistConfig,
  variantsSlice.reducer
);
