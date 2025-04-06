import React from "react";
import { Button } from "../ui/button";
import { cn, formatMoney } from "@/lib/utils";
import { BalancePropType } from "@/types";
import Box from "../atoms/box";

export default function Balance({
  wrapperClassName = "",
  balance,
}: Readonly<BalancePropType>) {
  return (
    <Box
      variant="section"
      className={cn(
        "w-full md:w-[462px] h-[72px] flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:items-center",
        wrapperClassName
      )}
    >
      <Box variant="section">
        <Box
          variant="h5"
          className="text-[#56616B] font-medium text-sm leading-[16px]"
        >
          Available Balance
        </Box>
        <Box
          variant="h3"
          className="font-bold mt-1 text-primary text-[36px] leading-[48px]"
        >
          {formatMoney(balance.balance)}
        </Box>
      </Box>
      <Button className="w-[167px] h-[52px] py-[14px] px-[28px]">
        Withdraw
      </Button>
    </Box>
  );
}
