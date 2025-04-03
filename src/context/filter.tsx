import { ContextType } from "@/types";
import { createContext } from "react";

export const FilterContext = createContext<ContextType>({
  isFilterOpen: false,
  update: () => {},
  filterItems: null,
  handleFilterItems: () => {},
});
