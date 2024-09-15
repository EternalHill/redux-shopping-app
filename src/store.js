import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice"

// storeの中にreducerが存在する
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});