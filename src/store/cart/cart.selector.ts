import type { RootState } from '../store';

export const selectCartItems = (state: RootState) =>
  state.cart.cartItems;

export const selectCartCount = (state: RootState) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );