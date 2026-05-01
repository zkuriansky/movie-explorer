import { api } from "./client";
import type { CreateDataTypes } from "@/entities/movie/types/create-types";
import type { DataTypes } from "@/entities/movie";

const moviesAPI = {
  getAll: async (): Promise<DataTypes[]> => {
    const { data } = await api.get<DataTypes[]>("/movies");
    return data;
  },
  getById: async (id: string): Promise<DataTypes> => {
    const { data } = await api.get<DataTypes>("/movies/" + id);
    return data;
  },
  add: async (newMovie: CreateDataTypes): Promise<DataTypes> => {
    const { data } = await api.post<DataTypes>("/movies", newMovie);
    return data;
  },
};
export default moviesAPI;
