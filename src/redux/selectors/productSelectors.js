export const selectItem = (id) => (state) => {
  return state.product.items.find((obj) => obj.id === id);
};
