"use client";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/components/molecules/navigation-menu";
import Sticky from "@/components/molecules/sticky";
import SlideInFilter from "@/components/templates/slide-in-filter";
import { useMemo, useState } from "react";
import Box from "@/components/atoms/box";
import { FilterContext } from "@/context/filter";
import { FilterFormFieldPropType, FilterStateType } from "@/types";

const degular = localFont({
  src: [
    {
      path: "../../public/font/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [filter, setFilter] = useState<FilterStateType>({
    openFilter: false,
    filterItems: null,
  });

  const update = () => {
    setFilter((prev) => {
      return { ...prev, openFilter: !prev.openFilter };
    });
  };

  const handleFilterItems = (items: FilterFormFieldPropType) => {
    setFilter((prev) => {
      return { ...prev, filterItems: items };
    });
  };

  const filterCount = useMemo(() => {
    if (!filter.filterItems) return 0;

    return Object.values(filter.filterItems).reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc + item.length;
      }
      if (
        !Array.isArray(item) &&
        typeof item === "object" &&
        !Object.is(item, null)
      ) {
        return acc++;
      }

      return acc;
    }, 0);
  }, [filter.filterItems]);

  const filterContextValue = useMemo(
    () => ({
      isFilterOpen: filter.openFilter,
      update,
      filterItems: filter.filterItems,
      handleFilterItems,
      filterCount,
    }),
    [filter.openFilter, filterCount, filter.filterItems]
  );

  return (
    <html lang="en">
      <body
        className={`${degular.className} ${
          filter.openFilter && "overflow-hidden"
        } p-[16px] `}
      >
        <FilterContext.Provider value={filterContextValue}>
          <Box>
            <main className="w-full 2xl:w-[1500px] 2xl:m-auto">
              <NavMenu />
              <Sticky />
              <div className="py-[120px] md:py-[150px] md:px-[20px] lg:px-[70px] xl:px-[140px] ">
                {children}
              </div>
            </main>
            <SlideInFilter />
          </Box>
        </FilterContext.Provider>
      </body>
    </html>
  );
}
