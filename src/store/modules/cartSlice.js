import { createSlice } from '@reduxjs/toolkit';
import lolSkinData from '../../assets/api/skin_store';

const initialState = {
    products: lolSkinData,
    carts: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            if (state.carts.find((item) => item.id === action.payload.id)) {
                alert('저는 이미 장바구니에 있어요!');
            } else {
                state.carts.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
        },
        priceTotal: (state, action) => {
            state.totalPrice = state.carts.reduce((acc, curr) => acc + Number(curr.price), 0);
        },
        sortProductAsc: (state, action) => {
            state.products = [...state.products].sort((a, b) =>
                a[action.payload] >= b[action.payload] ? 1 : -1
            );
        },
        sortProductDesc: (state, action) => {
            state.products = [...state.products].sort((a, b) =>
                a[action.payload] >= b[action.payload] ? -1 : 1
            );
        },
        productSearch: (state, action) => {
            state.products = lolSkinData.filter((product) =>
                product.title.includes(action.payload)
            );
        },
        clearSort: (state, action) => {
            state.products = lolSkinData;
        },
        resetCart: (state, action) => {
            state.carts = [];
        },
    },
});
export const {
    addCart,
    removeItem,
    priceTotal,
    sortProductAsc,
    sortProductDesc,
    productSearch,
    clearSort,
    resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
