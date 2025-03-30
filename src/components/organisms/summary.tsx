import React from "react";
import Box from "../atoms/box";
import { Info } from "@/icons";

export default function Summary() {
  return (
    <Box variant="section" className="flex flex-col gap-8">
      <Box className="w-full h-[66px]">
        <Box className="flex gap-1 justify-between items-center">
          <Box variant="h5" className="text-sm text-[#56616B] font-medium">
            Ledger Balance
          </Box>
          <Box variant="span">
            <Info />
          </Box>
        </Box>
        <Box
          variant="h3"
          className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
        >
          USD 0.00
        </Box>
      </Box>

      <Box className="w-full h-[66px]">
        <Box className="flex gap-1 justify-between ">
          <Box variant="h5" className="text-sm text-[#56616B] font-medium">
            Total Payout
          </Box>
          <Box variant="span">
            <Info />
          </Box>
        </Box>
        <Box
          variant="h3"
          className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
        >
          USD 55,080.00
        </Box>
      </Box>

      <Box className="w-full h-[66px]">
        <Box className="flex gap-1 justify-between items-center">
          <Box variant="h5" className="text-sm text-[#56616B] font-medium">
            Total Revenue
          </Box>
          <Box variant="span">
            <Info />
          </Box>
        </Box>
        <Box
          variant="h3"
          className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
        >
          USD 175,580.00
        </Box>
      </Box>

      <Box className="w-full h-[66px]">
        <Box className="flex gap-1 justify-between items-center">
          <Box variant="h5" className="text-sm text-[#56616B] font-medium">
            Pending Payout
          </Box>
          <Box variant="span">
            <Info />
          </Box>
        </Box>
        <Box
          variant="h3"
          className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
        >
          USD 0.00
        </Box>
      </Box>
    </Box>
  );
}
