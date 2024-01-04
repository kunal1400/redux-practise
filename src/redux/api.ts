import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "/posts"
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body
      })
    })
  })
});

export const { useFetchTodosQuery, useAddTodoMutation } = apiSlice;
