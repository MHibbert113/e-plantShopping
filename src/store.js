import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { addItem, removeItem,  updateQuantity } from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        Item: addItem,
        Remove: removeItem,
        Update : updateQuantity,
    },
});

export default store
