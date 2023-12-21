import { createSelector } from "@reduxjs/toolkit";

export const baseSearchSlice = state => state.searchSlice;

export const selectSort = createSelector(baseSearchSlice, state => state.sort);

export const selectCurrentPage = createSelector(baseSearchSlice, state => state.currentPage);

export const selectSearchResults = createSelector(baseSearchSlice, state => state.searchResults);



