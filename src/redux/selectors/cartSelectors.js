export const selectItems = (state) => {
  return state.cart.items;
};

export const selectTotalPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.counter, 0);
};

export const selectTotalCartItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.counter, 0);
};

export const selectCartItem = (id) => (state) => {
  return state.cart.items.find((obj) => obj.id === id);
};

export const selectCartItemPrice = (id) => (state) => {
  const currentItem = state.cart.items.find((obj) => obj.id === id);
  return currentItem.price * currentItem.counter;
};
