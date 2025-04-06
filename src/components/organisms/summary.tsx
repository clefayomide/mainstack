import React from "react";
import Box from "../atoms/box";
import { Info } from "@/icons";
import { WalletResType } from "@/types";
import { formatMoney } from "@/lib/utils";

export default function Summary({
  balance,
}: Readonly<{ balance: Record<keyof WalletResType, number> }>) {
  return (
    <Box variant="section" className="flex flex-col gap-8">
      {Object.keys(balance).map((key) => {
        return (
          <Box key={key} className="w-full h-[66px]">
            <Box className="flex gap-1 justify-between items-center">
              <Box
                variant="h5"
                className="text-sm text-[#56616B] capitalize font-medium"
              >
                {key.replaceAll("_", " ")}
              </Box>
              <Box variant="span">
                <Info />
              </Box>
            </Box>
            <Box
              variant="h3"
              className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
            >
              {formatMoney(balance[key as keyof WalletResType])}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
