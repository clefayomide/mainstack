import React from "react";
import Box from "../atoms/box";
import { Info } from "@/icons";
import { BalanceSummaryPropType, BalanceSummaryType } from "@/types";
import { formatMoney } from "@/lib/utils";

export default function Summary({
  balanceSummary,
}: Readonly<BalanceSummaryPropType>) {
  return (
    <Box variant="section" className="flex flex-col gap-8">
      {Object.keys(balanceSummary).map((key) => {
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
              data-testid={key}
              variant="h3"
              className="font-bold mt-2 text-[28px] leading-[38px] text-primary"
            >
              {formatMoney(balanceSummary[key as keyof BalanceSummaryType])}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
