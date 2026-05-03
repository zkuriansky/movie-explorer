import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { fetchMovies, addMovie, getMovieById } from "./thunk";
import { type MoviesStateTypes } from "./types";

const initialState: MoviesStateTypes = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
  filter: null,
  search: "",
  page: 1,
  pageSize: 8,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.page = 1;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedItem = action.payload;
      })
      .addCase(addMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Error";
      });
  },
});

export default movieSlice.reducer;
export const { setFilter, setPage, setSearch } = movieSlice.actions;
