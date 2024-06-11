import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    currPage: 1,
    totalPage: 1,
    postPerPage: 6,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        prevPage: (state, action) => {
            if (state.currPage === 1) {
                state.currPage = 1;
            } else {
                state.currPage--;
            }
        },
        nextPage: (state, action) => {
            if (state.currPage === state.totalPage) {
                state.currPage = state.totalPage;
            } else {
                state.currPage++;
            }
        },
        firstPage: (state, action) => {
            state.currPage = 1;
        },
        lastPage: (state, action) => {
            state.currPage = state.totalPage;
        },
        currentPage: (state, action) => {
            state.currPage = action.payload;
        },
        addData: (state, action) => {
            state.pageData = action.payload;
        },
        totalData: (state, action) => {
            state.currPage = 1;
            state.totalPage = Math.ceil(state.pageData.length / state.postPerPage);
        },
    },
});

export const { prevPage, nextPage, firstPage, lastPage, currentPage, addData, totalData } =
    paginationSlice.actions;
export default paginationSlice.reducer;
