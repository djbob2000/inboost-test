import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { initialState } from "./variants.initState";

const variantsSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {
    toggleSelected: (state, { payload }) => {
      console.log("🚀 ~ file: variants.slice.js:11 ~ payload:", payload);
      state.selectedID.includes(payload)
        ? (state.selectedID = state.selectedID.filter(
            (item) => item !== payload
          ))
        : state.selectedID.push(payload);
    },
  },
});
export const { toggleSelected } = variantsSlice.actions;

const persistConfig = {
  key: "selectedID",
  storage,
  whitelist: ["selectedID"],
};
export const variantsReducer = persistReducer(
  persistConfig,
  variantsSlice.reducer
);
