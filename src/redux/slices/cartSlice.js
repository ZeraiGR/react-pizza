import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const getCurrentItem = (state, action) => {
  return state.items.find((obj) => obj.id === action.payload);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
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
    remove(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    plus(state, action) {
      const item = getCurrentItem(state, action);
      if (item) {
        item.counter++;
      }
    },
    minus(state, action) {
      const item = getCurrentItem(state, action);
      if (item.counter > 1) {
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
