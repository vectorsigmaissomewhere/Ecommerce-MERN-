import authReducer from './auth-slice'
import { configureStore } from '@reduxjs/toolkit';
import adminProductsSlice from './admin/products-slice';
import shopProductsSlice from "./shop/products-slice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: adminProductsSlice,
        shopProducts: shopProductsSlice
    },
});

export default store;