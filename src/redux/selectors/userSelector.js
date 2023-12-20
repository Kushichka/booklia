import { createSelector } from "@reduxjs/toolkit";

export const baseUserSlice = state => state.userSlice;

export const selectUserData = createSelector(baseUserSlice, state => state.userData);
