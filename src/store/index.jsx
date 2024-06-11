import { configureStore } from '@reduxjs/toolkit';
import community from './modules/communitySlice';
import pagination from './modules/paginationSlice';
import auth from './modules/authSlice';
import cart from './modules/cartSlice';

export const store = configureStore({
    reducer: {
        community,
        pagination,
        auth,
        cart,
    },
});
