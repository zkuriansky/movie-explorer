import Filter from "../components/Filter";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MoviesPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="main__app">
        <Filter />
        <MovieList />
      </div>
      <Pagination />
    </div>
  );
};

export default MoviesPage;
