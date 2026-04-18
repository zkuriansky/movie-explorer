import Filter from "@/features/filter-movie";
import Header from "@/widgets/Header";
import { MovieList } from "../../entities/movie";
import Pagination from "@/widgets/Pagination";

const MainPage = () => {
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

export default MainPage;
