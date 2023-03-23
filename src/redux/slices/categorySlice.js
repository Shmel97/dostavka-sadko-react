import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryActive: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryActive(state, action) {
      state.categoryActive = action.payload;
    },
    setFilters(state, action) {
      state.categoryActive = Number(action.payload.categoryActive);
    },
  },
});

export const { setCategoryActive, setFilters } = categorySlice.actions;

export default categorySlice.reducer;
