import moviesAPI from "@/shared/api/movie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CreateDataTypes } from "../types/create-types";
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      return await moviesAPI.getAll();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const getMovieById = createAsyncThunk(
  "movies/getMovieById",
  async (id: string, { rejectWithValue }) => {
    try {
      return await moviesAPI.getById(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovie: CreateDataTypes, { rejectWithValue }) => {
    try {
      return await moviesAPI.add(newMovie);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
