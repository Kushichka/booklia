import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllBooks } from "../../API/fetchAllBooks";

const initialState = {
    inputValue: '',
    sort: '',
    currentPage: 1,
    searchResults: [],
    resultError: '',
    isLoading: false
}

export const getAllBooks = createAsyncThunk(
    'search/getAllBooks',
    async ({title, sortBy, page}) => {
        const res = await fetchAllBooks(title, sortBy, page);

        return res;
    }  
);

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeInputValue: (state, {payload}) => {
            state.inputValue = payload;
    },
        changeSort: (state, {payload}) => {
            const name = payload === 'relevance' ? '' : payload;
            
            state.sort = name;
            localStorage.setItem('sort', name);
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
            .addCase(getAllBooks.fulfilled, (state, {payload}) => {
                if(!payload) {
                    state.searchResults = [];
                } else {
                    state.searchResults = payload;
                }

                state.isLoading = false;
            })
            .addCase(getAllBooks.rejected, state => {
                state.searchResults = [];
                state.isLoading = false;
            });
    }
});

export default searchSlice.reducer;

export const {
    changeInputValue, 
    changeSort,
    changeCurrentPage,
    changeSearchResults,
    changeResultError,
    changeIsLoading

} = searchSlice.actions;