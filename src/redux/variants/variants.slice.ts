import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initialState } from './variants.initState';

interface VariantsState {
  selectedID: number[];
}

const variantsSlice = createSlice({
  name: 'variants',
  initialState,
  reducers: {
    toggleSelected: (state: VariantsState, action: PayloadAction<number>) => {
      state.selectedID.includes(action.payload)
        ? (state.selectedID = state.selectedID.filter(
            item => item !== action.payload
          ))
        : state.selectedID.push(action.payload);
    },
  },
});

export const { toggleSelected } = variantsSlice.actions;

const persistConfig = {
  key: 'selectedID',
  storage,
  whitelist: ['selectedID'],
};

export const variantsReducer = persistReducer<ReturnType<typeof variantsSlice.reducer>>(
  persistConfig,
  variantsSlice.reducer
);
