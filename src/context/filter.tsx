import { createContext } from "react";

export const FilterContext = createContext({
  isFilterOpen: false,
  update: () => {},
});
