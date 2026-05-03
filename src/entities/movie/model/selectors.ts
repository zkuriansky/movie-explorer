import type { RootState } from "@/app/store/store";

export const selectMovieState = (state: RootState) => state.movies;
export const selectFilteredMovies = (state: RootState) => {
  const { items, filter, search } = state.movies;
  let result = items;
  if (filter !== null) {
    result = result.filter((item) => item.rating >= filter);
  }
  if (search.trim() !== "") {
    const valid = search.trim().toLowerCase();
    result = result.filter((item) => item.title.toLowerCase().includes(valid));
  }
  return result;
};
export const selectPaginatedMovies = (state: RootState) => {
  const filtered = selectFilteredMovies(state);
  const { page, pageSize } = state.movies;
  const startIndex = (page - 1) * pageSize;
  return filtered.slice(startIndex, startIndex + pageSize);
};
export const selectTotalPages = (state: RootState) => {
  const filtered = selectFilteredMovies(state);
  return Math.max(1, Math.ceil(filtered.length / state.movies.pageSize));
};
