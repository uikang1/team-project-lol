import { createSlice } from '@reduxjs/toolkit';
import communityData from '../../assets/api/communityData';

const initialState = {
    communityData: localStorage.getItem('communityData')
        ? JSON.parse(localStorage.getItem('communityData'))
        : communityData.slice().reverse(),
    current: null,
    title: '',
    desc: '',
    name: '',
    myposition: '',
    findposition: '',
    tier: '',
};
let no = initialState.communityData.length + 1;
export const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            const { name, title, myposition, findposition, tier, desc } = action.payload;
            state.communityData = [
                {
                    id: no,
                    name,
                    title,
                    myposition,
                    findposition,
                    tier,
                    desc,
                },
                ...state.communityData,
            ];
            localStorage.setItem('communityData', JSON.stringify(state.communityData));
        },
        onDel: (state, action) => {
            state.communityData = state.communityData.filter((item) => item.id !== action.payload);
            localStorage.setItem('communityData', JSON.stringify(state.communityData));
        },

        changeInput: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },

        onEdit: (state, action) => {
            state.current = action.payload;
        },

        onUpdate: (state, action) => {
            state.communityData = state.communityData.map((item) =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );
            localStorage.setItem('communityData', JSON.stringify(state.communityData));
        },

        positionFilter: (state, action) => {
            state.communityData = communityData;
            state.communityData = state.communityData.filter(
                (item) => item.findposition === action.payload
            );
        },
        tierFilter: (state, action) => {
            state.communityData = communityData;
            state.communityData = state.communityData.filter(
                (item) => item.tier === action.payload
            );
        },
        resetFilter: (state) => {
            state.communityData = localStorage.getItem('communityData')
                ? JSON.parse(localStorage.getItem('communityData'))
                : communityData.slice().reverse();
        },
        resetForm: (state) => {
            state.name = '';
            state.title = '';
            state.myposition = '';
            state.findposition = '';
            state.tier = 'all';
            state.desc = '';
        },
    },
});

export const {
    onAdd,
    onDel,
    changeInput,
    positionFilter,
    tierFilter,
    resetFilter,
    onEdit,
    onUpdate,
    resetForm,
} = communitySlice.actions;
export default communitySlice.reducer;
