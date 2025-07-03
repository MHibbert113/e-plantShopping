import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    addItem: (state, action) => {
        state.items.push(action.payload); // Add to Array
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name); // Remove Item
    },
    updateQuantity: (state, action) => {

    
    },
  },
});




export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
