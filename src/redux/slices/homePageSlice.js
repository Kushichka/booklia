import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllBooks } from "../../API/fetchAllBooks";

const initialState = {
    inputValue: 'Harry Potter',
    sort: '',
    currentPage: 1,
    searchResults: [],
    resultError: '',
    isLoading: false
}

export const getAllBooks = createAsyncThunk(
    'home/getAllBooks',
    async ({inputValue, sort, currentPage}) => {
        const res = await fetchAllBooks(inputValue, sort, currentPage);
        return res;
    }
);

const homePageSlice = createSlice({
    name: 'home',
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
        builder
            .addCase(getAllBooks.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllBooks.fulfilled, (state, { payload }) => {
                if (payload === null || payload.docs.length === 0) {
                    state.resultError = 'No Search Result Found!';
                } else {
                    state.resultError = '';
                    state.searchResults = payload;
                }

                state.isLoading = false;
            })
            .addCase(getAllBooks.rejected, state => {
                state.resultError = 'No Search Result Found!';
                state.isLoading = false;
            });            
    }
});

export default homePageSlice.reducer;

export const {
    changeInputValue, 
    changeSort,
    changeCurrentPage,
    changeSearchResults,
    changeResultError,
    changeIsLoading

} = homePageSlice.actions;