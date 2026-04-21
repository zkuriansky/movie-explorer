import type { DataTypes } from "@/entities/movie";
import { useState } from "react";

const usePaginate = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginate = (
    items: DataTypes[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };
  return { currentPage, setCurrentPage, paginate };
};

export default usePaginate;
