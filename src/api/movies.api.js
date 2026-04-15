const URL = "http://localhost:3001/movies";

const moviesAPI = {
  getAll: async () => {
    const response = await fetch(URL);
    if (!response.ok) {
      console.log("Error geting all films!");
    }
    return await response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error getting movie info");
    }
    return await response.json();
  },
};

export default moviesAPI;
