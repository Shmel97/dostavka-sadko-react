import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategorySelect } from './types';

export const fetchCategories = createAsyncThunk('product/fetchCategoriesStatus', async () => {
  const { data } = await axios.get<CategorySelect[]>(`http://165.227.222.89/menu/categories/`);
  return data as CategorySelect[];
});
