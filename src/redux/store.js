import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categorySlice';
import basket from './slices/basketSlice';
import product from './slices/productSlice';

export const store = configureStore({
  reducer: {
    category,
    basket,
    product,
  },
});

console.log(store);
