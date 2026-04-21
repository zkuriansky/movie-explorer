import { Link } from "react-router";
import Search from "@/features/movie/search-movie/ui";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Movie explorer</h1>
      <Search />
      <Link to={"/form"} className="header__button">
        Add new Movie
      </Link>
    </header>
  );
};

export default Header;
