import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const initialState = [
//   { id: "1", title: "First Post!", content: "Hello!" },
//   { id: "2", title: "Second Post", content: "More text" }
// ];

const initialState: {
  posts: { id: string; title: string; content: string }[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
} = {
  posts: [],
  status: "idle",
  error: null
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          },
          meta: {
            timestamp: new Date().toISOString()
          },
          error: null
        };
      }
    },
    update: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      //   state.error = action.error.message;
    });
  }
});

export const fetchTodos = createAsyncThunk("posts/fetchTodos", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  } catch (error) {
    return error;
  }
});

export const { add, update } = postsSlice.actions;
export default postsSlice.reducer;
