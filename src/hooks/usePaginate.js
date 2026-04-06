import React, { useState } from "react";

const usePaginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };
  return { currentPage, setCurrentPage, paginate };
};

export default usePaginate;
