import { configureStore } from "@reduxjs/toolkit";

import searchSlice from './slices/searchSlice';
import userSlice from './slices/userSlice';
import { booksApi } from "../API/api";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        searchSlice,
        userSlice 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware)
})