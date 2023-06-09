import { createSelector } from "@reduxjs/toolkit";

export const baseSearchSlice = state => state.searchSlice;

export const selectIsLoading = createSelector(baseSearchSlice, state => state.isLoading);

export const selectInputValue = createSelector(baseSearchSlice, state => state.inputValue);

export const selectSort = createSelector(baseSearchSlice, state => state.sort);

export const selectCurrentPage = createSelector(baseSearchSlice, state => state.currentPage);

export const selectSearchResults = createSelector(baseSearchSlice, state => state.searchResults);



