import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue: 'Harry Potter'
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        }
    }
});

export default bookSlice.reducer;

export const {
    changeInputValue
} = bookSlice.actions;