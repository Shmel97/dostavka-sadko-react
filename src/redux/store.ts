import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import category from './category/slice';
import basket from './basket/slice';
import product from './product/slice';

export const store = configureStore({
  reducer: {
    category,
    basket,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
