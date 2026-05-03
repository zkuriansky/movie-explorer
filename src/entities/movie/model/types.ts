import type { DataTypes } from "../types/data-types";
import type { FilterTypes } from "../types/filter-types";

export interface MoviesStateTypes {
  items: DataTypes[];
  selectedItem: DataTypes | null;
  loading: boolean;
  error: null | string;
  filter: FilterTypes;
  search: string;
  page: number;
  pageSize: number;
}
