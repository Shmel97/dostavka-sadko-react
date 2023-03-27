import { RootState } from '../store';

export const basketItems = (state: RootState) => state.basket;
export const basketItemsId = (id: string) => (state: RootState) =>
  state.basket.items.find((obj) => obj.id === id);
