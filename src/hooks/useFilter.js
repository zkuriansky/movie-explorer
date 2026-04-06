const useFilter = ({ data, setMovies, setCurrentPage }) => {
  const handleFilterMovies = (param) => {
    const filtered = data.filter((movie) => movie.rating >= param);
    setMovies(filtered);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setMovies(data);
    setCurrentPage(1);
  };
  return { handleFilterMovies, handleResetFilter };
};

export default useFilter;
