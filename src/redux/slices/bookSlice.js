import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue: 'Harry Potter',
    sort: '',
    currentPage: 1,
    searchResults: [],
    resultError: '',
    isLoading: false
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        changeSort: (state, action) => {
            state.sort = action.payload;
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        changeSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        changeResultError: (state, action) => {
            state.resultError = action.payload;
        },
        changeIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export default bookSlice.reducer;

export const {
    changeInputValue, 
    changeSort,
    changeCurrentPage,
    changeSearchResults,
    changeResultError,
    changeIsLoading

} = bookSlice.actions;