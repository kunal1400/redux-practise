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

export const PokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (offset) => `pokemon?offset=${offset}&limit=${10}`
    })
  })
});

export const { useGetPokemonsQuery } = PokemonApi;

export const { useFetchTodosQuery, useAddTodoMutation } = apiSlice;
