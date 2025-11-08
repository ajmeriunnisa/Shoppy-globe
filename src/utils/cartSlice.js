import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartItems:[]
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.cartItems.find((i) => i.id === id);
      if (existing) existing.quantity = quantity;
    },

    clearCart: (state) => {
      state.cartItems = [];
    }
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer;

// === Selectors ===

// Get the full list of items in the cart
export const selectCartItems = (state) => state.cart.cartItems;

// Calculate the total price of all items in the cart
export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

// Count total number of items (sum of quantities)
export const selectCartCount = (state) =>
  state.cart.cartItems.reduce((count, item) => count + item.quantity, 0);