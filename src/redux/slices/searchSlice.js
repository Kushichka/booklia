import { createSlice } from "@reduxjs/toolkit";
// import { fetchAllBooks } from "../../API/fetchAllBooks";

const initialState = {
    sort: 'relevance',
    currentPage: 1,
    resultError: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSort: (state, {payload}) => {
            state.sort = !payload ? 'relevance' : payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setResultError: (state, action) => {
            state.resultError = action.payload;
        }
    }
});

export default searchSlice.reducer;

export const {
    setSort,
    setCurrentPage,
    setResultError

} = searchSlice.actions;