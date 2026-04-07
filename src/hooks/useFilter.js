const useFilter = ({ data, setMovies, setCurrentPage, movies }) => {
  const handleFilterMovies = (param) => {
    const filtered = data.filter((movie) => movie.rating >= param);
    setMovies(filtered);
    setCurrentPage(1);
  };

  const isFilterActive = movies.length !== data.length;

  const handleResetFilter = () => {
    setMovies(data);
    setCurrentPage(1);
  };
  return { handleFilterMovies, handleResetFilter, isFilterActive };
};

export default useFilter;
