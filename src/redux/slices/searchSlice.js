import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchAllBooks } from "../../API/fetchAllBooks";

const initialState = {
    inputValue: '',
    sort: '',
    currentPage: 2,
    searchResults: [],
    resultError: '',
    isLoading: false
}

// export const getAllBooks = createAsyncThunk(
//     'search/getAllBooks',
//     async ({title, sortBy, page}) => {
//         const res = await fetchAllBooks(title, sortBy, page);

//         return res;
//     }  
// );

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputValue: (state, {payload}) => {
            state.inputValue = payload;
    },
        setSort: (state, {payload}) => {
            const name = payload === 'relevance' ? '' : payload;
            
            state.sort = name;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
            state.sort = '';
            state.page = 1;
        },
        setResultError: (state, action) => {
            state.resultError = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(getAllBooks.pending, state => {
    //             state.isLoading = true;
    //         })
    //         .addCase(getAllBooks.fulfilled, (state, {payload}) => {
    //             if(!payload) {
    //                 state.searchResults = [];
    //             } else {
    //                 state.searchResults = payload;
    //             }

    //             state.isLoading = false;
    //         })
    //         .addCase(getAllBooks.rejected, state => {
    //             state.searchResults = [];
    //             state.isLoading = false;
    //         });
    // }
});

export default searchSlice.reducer;

export const {
    setInputValue, 
    setSort,
    setCurrentPage,
    setSearchResults,
    setResultError,
    setIsLoading

} = searchSlice.actions;