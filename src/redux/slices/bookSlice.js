import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchDescription } from "../../API/fetchDescription";
import { fetchAllBooks } from "../../API/fetchAllBooks";

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

export const getLastBook = createAsyncThunk(
    'book/getBooksAgain',
    async ({bookTitle, sort, page}) => {
        const res = await fetchAllBooks(bookTitle, sort, page);

        return res;
    }
);

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBookData: (state, {payload}) => {
            state.data = payload;
        },
        setIsloading: (state, {payload}) => {
            state.isLoading = payload;
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
                    if(typeof payload.description === 'object') {
                        state.description = payload.description.value;
                    } else {
                        state.description = payload.description;
                    }
                }

                state.isLoading = false;
            })
            .addCase(getDescription.rejected, state => {
                state.description = '';
                state.isLoading = false;
            });
        builder
            .addCase(getLastBook.pending, state => {
                state.isLoading = true;
            })
            .addCase(getLastBook.fulfilled, (state, {payload}) => {
                if(payload.docs) {
                    const bookId = localStorage.getItem('bookId');

                    for (const i of payload.docs) {
                        if (i.key === bookId) {
                            state.data = { // code duplicate!
                                title: i.title,
                                author: i.author_name,
                                cover: i.cover_i,
                                publishYear: i.first_publish_year,
                                editions: i.edition_count,
                                language: i.language,
                                ratingAvarage: i.ratings_average,
                            }
                        }
                    }

                    state.isLoading = false;
                }
            })
            .addCase(getLastBook.rejected, state => {
                state.data = [];
                state.isLoading = false;
            });
    }
});

export default bookSlice.reducer;

export const {
    setBookData,
    setIsloading
} = bookSlice.actions;