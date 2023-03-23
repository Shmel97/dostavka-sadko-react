import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'product/fetchProductsStatus',
  async ({ categoriesActive }) => {
    const { data } = await axios.get(
      `https://63cc2abe9b72d2a88e0948dc.mockapi.io/products?category=${categoriesActive}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = '';
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.state = 'success';
    },
    [fetchProducts.rejected]: (state) => {
      state.state = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
