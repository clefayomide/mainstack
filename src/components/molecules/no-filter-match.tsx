import React from "react";
import Box from "../atoms/box";
import { NoFilterMatch } from "@/icons";
import { Button } from "../ui/button";

export default function NoFilterMatchComp({
  onClear,
}: Readonly<{
  onClear: () => void;
}>) {
  return (
    <Box className="w-full flex flex-col gap-5 md:w-[369px] h-[286px]">
      <NoFilterMatch />
      <Box
        variant="h1"
        className="leading-[40px] text-[28px] font-bold text-primary "
      >
        No matching transaction found for the selected filter
      </Box>
      <Box
        variant="p"
        className="font-medium text-base leading-[24px] text-[#56616B]"
      >
        Change your filters to see more results, or add a new product.
      </Box>
      <Button
        variant={"disabled"}
        type="button"
        onClick={onClear}
        className="font-semibold text-base text-primary w-[117px] h-[48px]"
      >
        Clear Filter
      </Button>
    </Box>
  );
}
