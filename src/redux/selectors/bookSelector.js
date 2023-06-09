import { createSelector } from "@reduxjs/toolkit";

export const baseBookSlice = state => state.bookSlice;

export const selectData = createSelector(baseBookSlice, state => state.data);
export const selecDescription = createSelector(baseBookSlice, state => state.description);