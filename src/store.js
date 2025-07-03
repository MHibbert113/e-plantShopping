import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { addItem, removeItem, updateQuantity } from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
