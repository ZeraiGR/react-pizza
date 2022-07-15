export const getItems = (state) => {
  return state.cart.items;
};

export const getTotalPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.counter, 0);
};

export const getTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + item.counter, 0);
};

export const getCurrentItem = (state, id) => {
  return state.cart.items.find((obj) => obj.id === id);
};

export const getCurrentItemPrice = (state, id) => {
  const currentItem = state.cart.items.find((obj) => obj.id === id);
  return currentItem.price * currentItem.counter;
};

export const getCurrentItemTotal = (state, id) => {
  const currentItem = state.cart.items.find((obj) => obj.id === id);
  return currentItem.counter;
};
