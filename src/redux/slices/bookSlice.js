import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAPI } from "../../API/fetchAPI";

const initialState = {
    inputValue: 'Harry Potter',
    sort: '',
    currentPage: 1,
    searchResults: [],
    resultError: '',
    isLoading: false
}

export const getBooks = createAsyncThunk(
    'book/getBooks',
    async ({inputValue, sort, currentPage}) => {
        const res = await fetchAPI(inputValue, sort, currentPage);
        return res;
    }
);

const bookSlice = createSlice({
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
    },
    extraReducers: builder => {
        builder.addCase(getBooks.pending, state => {
            state.isLoading = true;
        })
        .addCase(getBooks.fulfilled, (state, { payload }) => {
            console.log(payload);
            if (payload === null || payload.docs.length === 0) {
                state.resultError = 'No Search Result Found!';
            } else {
                state.resultError = '';
                state.searchResults = payload;
            }

            state.isLoading = false;
        })
        .addCase(getBooks.rejected, state => {
            state.resultError = 'No Search Result Found!';
            state.isLoading = false;
        })
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