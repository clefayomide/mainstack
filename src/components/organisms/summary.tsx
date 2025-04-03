import React from "react";
import Box from "../atoms/box";
import { Info } from "@/icons";
import { WalletResType } from "@/types";

export default function Summary({
  balance,
}: Readonly<{ balance: WalletResType }>) {
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
          USD {balance.ledger_balance}
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
          USD {balance.total_payout}
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
          USD {balance.total_revenue}
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
          USD {balance.pending_payout}
        </Box>
      </Box>
    </Box>
  );
}
