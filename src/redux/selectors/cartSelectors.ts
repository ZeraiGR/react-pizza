import { RootState } from '../store';

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

export const selectTotalPrice = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.counter, 0);
};

export const selectTotalCartItems = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.counter, 0);
};

export const selectCartItem = (id: string) => (state: RootState) => {
  return state.cart.items.find((obj) => obj.id === id);
};

export const selectCartItemPrice = (id: string) => (state: RootState) => {
  const currentItem = state.cart.items.find((obj) => obj.id === id);
  if (currentItem) {
    return currentItem.price * currentItem.counter;
  } else {
    return 0;
  }
};
