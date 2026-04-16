import { MoviesContext } from "../context/MoviesContext";
import React, { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(MoviesContext);
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
