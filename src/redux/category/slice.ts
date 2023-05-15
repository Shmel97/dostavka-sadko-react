import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySliceState, Status } from './types';
import { fetchCategories } from './asyncActions';

const initialState: CategorySliceState = {
  items: [],
  categoryActive: "rolly-i-sushi",
  status: Status.LOADING,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryActive(state, action: PayloadAction<string>) {
      state.categoryActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setCategoryActive } = categorySlice.actions;

export default categorySlice.reducer;
