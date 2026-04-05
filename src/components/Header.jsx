import { MoviesContext } from "../context/MoviesContext";
import React, { useContext } from "react";
import Search from "./Search";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(MoviesContext);
  return (
    <header className="header">
      <h1>Movie explorer</h1>
      <Search />
    </header>
  );
};

export default Header;
