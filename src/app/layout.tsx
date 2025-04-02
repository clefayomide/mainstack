"use client";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/components/molecules/navigation-menu";
import Sticky from "@/components/molecules/sticky";
import SlideInFilter from "@/components/templates/slide-in-filter";
import { useMemo, useState } from "react";
import Box from "@/components/atoms/box";
import { FilterContext } from "@/context/filter";

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
  const [openFilter, setOpenFilter] = useState(false);

  const update = () => {
    setOpenFilter((prev) => !prev);
  };

  const filterContextValue = useMemo(
    () => ({ isFilterOpen: openFilter, update }),
    [openFilter]
  );

  return (
    <html lang="en">
      <body
        className={`${degular.className} ${
          openFilter && "overflow-hidden"
        } p-[16px] `}
      >
        <FilterContext.Provider value={filterContextValue}>
          <Box>
            <main className="w-full 2xl:w-[1500px] 2xl:m-auto">
              <NavMenu />
              <Sticky />
              <div className="py-[60px] md:px-[20px] lg:px-[70px] md:py-[80px] xl:px-[140px]">
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
