import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchDescription } from "../../API/fetchDescription";

const initialState = {
    data: [],
    description: '',
    isLoading: false
};

export const getDescription = createAsyncThunk(
    'book/getDescription',
    async (id) => {
        const res = await fetchDescription(id);
        return res;
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setDescription: (state, payload) => {
            state.description = payload;
        },
        getBookData: (state, payload) => {
            state.data = payload.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDescription.pending, state => {
                state.isLoading = true;
            })
            .addCase(getDescription.fulfilled, (state, { payload }) => {
                if(!payload) {
                    state.description = '';
                } else {
                    state.description = payload.description;
                }

                state.isLoading = false;
            })
            .addCase(getDescription.rejected, state => {
                state.description = '';
                state.isLoading = false;
            });
    }
});

export default bookSlice.reducer;

export const {
    setDescription,
    getBookData
} = bookSlice.actions;