import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProductItem } from '../../shop-data';

export type CartItem = ProductItem & {
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<ProductItem>
    ) => {
      const existingCartItem =
        state.cartItems.find(
          (item) => item.id === action.payload.id
        );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems =
          state.cartItems.filter(
            (cartItem) =>
              cartItem.id !== action.payload
          );
      }
    },

    removeItem: (
      state,
      action: PayloadAction<number>
    ) => {
      state.cartItems =
        state.cartItems.filter(
          (item) => item.id !== action.payload
        );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;