import type { CreateDataTypes } from "@/entities/movie/types/create-types";

const URL = "http://localhost:3001/movies";
const headers = {
  "Content-Type": "application/json",
};

const moviesAPI = {
  getAll: async () => {
    const response = await fetch(URL);
    if (!response.ok) {
      console.log("Error geting all films!");
    }
    return await response.json();
  },
  getById: async (id: string) => {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error getting movie info");
    }
    return await response.json();
  },
  add: async (newMovie: CreateDataTypes) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newMovie),
    });
    if (!response.ok) {
      throw new Error("Error adding new task");
    }
    return await response.json();
  },
};

export default moviesAPI;
