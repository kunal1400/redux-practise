// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface PokemonI {
  name: string;
  url: string;
}

// interface initialStateI {
//   totalCount: number;
//   next: string | null;
//   previous: string | null;
//   pokemons: Array<PokemonI>;
//   status: "idle" | "pending" | "fulfilled" | "rejected";
//   error: null | string;
// }

// const initialState: initialStateI = {
//   totalCount: 0,
//   next: null,
//   previous: null,
//   pokemons: [],
//   status: "idle",
//   error: null
// };

// export const fetchPokemons = createAsyncThunk(
//   "pokemons/fetch",
//   async (url: string) => {
//     try {
//       const apiUrl = !url ? "https://pokeapi.co/api/v2/pokemon?limit=10" : url;
//       const response = await fetch(apiUrl);
//       return await response.json();
//     } catch (error) {
//       return error;
//     }
//   }
// );

// const pokemonsSlice = createSlice({
//   name: "pokemons",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchPokemons.pending, (state, action) => {
//       state.status = "pending";
//     });
//     builder.addCase(fetchPokemons.fulfilled, (state, action) => {
//       return {
//         status: "fulfilled",
//         totalCount: action.payload.count,
//         pokemons: action.payload.results,
//         next: action.payload.next,
//         previous: action.payload.previous,
//         error: null
//       };
//     });
//     builder.addCase(fetchPokemons.rejected, (state, action) => {
//       state.status = "rejected";
//       //   state.error = action.error.message;
//     });
//   }
// });

// export default pokemonsSlice.reducer;
