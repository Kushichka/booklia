import { configureStore } from "@reduxjs/toolkit";

import searchSlice from './slices/searchSlice';
import bookSlice from './slices/bookSlice';
import userSlice from './slices/userSlice';
import { booksApi } from "../API/api";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        searchSlice, 
        bookSlice, 
        userSlice 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware)
})