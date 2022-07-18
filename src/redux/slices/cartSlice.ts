import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  title: string;
  img: string;
  price: number;
  type: string;
  size: number;
  counter: number;
};

interface cartSliceState {
  items: CartItem[];
}

const initialState: cartSliceState = {
  items: [],
};

const getCurrentItem = (state: cartSliceState, action: PayloadAction<string>) => {
  return state.items.find((obj) => obj.id === action.payload);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.counter++;
      } else {
        state.items.push({
          ...action.payload,
          counter: 1,
        });
      }
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    plus(state, action: PayloadAction<string>) {
      const item = getCurrentItem(state, action);
      if (item) {
        item.counter++;
      }
    },
    minus(state, action: PayloadAction<string>) {
      const item = getCurrentItem(state, action);
      if (item && item.counter > 1) {
        item.counter--;
      }
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { add, remove, plus, minus, clear } = cartSlice.actions;

export default cartSlice.reducer;
