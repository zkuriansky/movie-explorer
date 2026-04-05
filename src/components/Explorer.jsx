import React, { useState } from "react";
import Filter from "./Filter";
import Header from "./Header";
import MovieList from "./MovieList";
import data from "../data/movies";
import Pagination from "./Pagination";

const Explorer = () => {
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

export default Explorer;
