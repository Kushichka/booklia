import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        isLogged: false,
        name: '',
        uid: '',
        authProvider: '',
        email: '',
        photoURL: ''
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.userData = payload;
        },
        userLogout: (state) => {
            state.userData = null;
        }
    }
})

export default userSlice.reducer;

export const {
    setUser,
    userLogout
} = userSlice.actions;