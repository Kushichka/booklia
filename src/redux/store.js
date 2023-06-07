import { configureStore } from "@reduxjs/toolkit";

import searchSlice from './slices/searchSlice';
import bookSlice from './slices/bookSlice';

export const store = configureStore({
    reducer: { searchSlice, bookSlice }
})