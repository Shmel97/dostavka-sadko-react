
import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { Product, ProductSliceState, Status } from './types';





const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  /*extraReducers: {
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
  }, */
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});



export const { setItems } = productSlice.actions;

export default productSlice.reducer;
