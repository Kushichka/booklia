import { configureStore } from "@reduxjs/toolkit";

import homePageSlice from './slices/homePageSlice';
import bookSlice from './slices/bookSlice';

export const store = configureStore({
    reducer: { homePageSlice, bookSlice }
})