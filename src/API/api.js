import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: builder => ({
        getBooks: builder.query({
            query: (title) => `?q=intitle:${title}&key=${apiKey}`
        }),
        getBookById: builder.query({
            query: (id) => `/${id}`
        }),
    })
})

export const {
    useGetBooksQuery,
    useGetBookByIdQuery
} = booksApi;