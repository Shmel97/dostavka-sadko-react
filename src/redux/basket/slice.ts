import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getBasketFromLS } from '../../utils/getBasketFromLS';
import { BasketSliceState, BasketItem } from './types';

const initialState: BasketSliceState = getBasketFromLS();

//console.log(initialState.items);

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    /* addItems(state, action) {
      state.items.push(action.payload);
      
    }, */
    addItems(state, action: PayloadAction<BasketItem>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      console.log(findItem);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItem, minusItem, clearItem } = basketSlice.actions;

export default basketSlice.reducer;
