import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategorySliceState } from "./types";

const initialState: CategorySliceState = {
    categoryActive: 0,
  };

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      setCategoryActive(state, action: PayloadAction<number>) {
        state.categoryActive = action.payload;
      },
      setFilters(state, action: PayloadAction<CategorySliceState>) {
        state.categoryActive = Number(action.payload.categoryActive);
      },
    },
  });

  export const { setCategoryActive, setFilters } = categorySlice.actions;

export default categorySlice.reducer;