import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [],
    user: localStorage.getItem('loggedInUser')
        ? JSON.parse(localStorage.getItem('loggedInUser'))
        : null,
    authed: !!localStorage.getItem('loggedInUser'),
};

let idNum = initialState.userData.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, email, password } = action.payload;
            const validUser = state.userData.find((user) => user.email === email);
            if (validUser && validUser.password === password) {
                state.user = validUser;
                localStorage.setItem('loggedInUser', JSON.stringify(validUser));
                state.authed = true;
            } else {
                alert('회원 정보를 찾을 수 없습니다');
            }
        },
        logout: (state, action) => {
            state.user = { id: '', name: '', email: '', password: '' };
            state.authed = false;
            localStorage.removeItem('loggedInUser');
        },
        signup: (state, action) => {
            const { name, email, password } = action.payload;
            const findEmail = state.userData.find((user) => user.email === email);
            if (findEmail) {
                alert('이미 가입된 회원입니다');
            } else {
                state.userData = [
                    ...state.userData,
                    {
                        id: idNum++,
                        ...action.payload,
                    },
                ];
                localStorage.setItem('userList', JSON.stringify(state.userData));
            }
        },
    },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
