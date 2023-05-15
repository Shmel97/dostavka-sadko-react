import { RootState } from '../store';

export const categoryActive = (state: RootState) => state.category.categoryActive;
export const categoryItems = (state: RootState) => state.category.items;
