"use client";

import React, { use } from "react";
import Balance from "../organisms/balance";
import Summary from "../organisms/summary";
import Box from "../atoms/box";
import { Chart } from "../molecules/chart";
import TransactionHistory from "../organisms/transaction-history";
import { TransactionResType, WalletResType } from "@/types";

export default function Revenue({
  dataPromise,
}: Readonly<{
  dataPromise: Promise<[TransactionResType, WalletResType]>;
}>) {
  const revenueData = use(dataPromise);
  const chartData = revenueData[0].map(({ amount }) => {
    return { amount };
  });
  return (
    <Box>
      <Box
        variant="section"
        className="flex flex-col md:flex-row justify-between"
      >
        <Box variant="section" className="w-full md:w-[400px] xl:w-[630px]">
          <Balance balance={revenueData[1]} />
          <Chart data={chartData} wrapperClassName="mt-32 lg:mt-[20px]" />
        </Box>
        <Box
          variant="section"
          className="mt-14 md:mt-0 w-full md:w-[260px] lg:w-[271px]"
        >
          <Summary balance={revenueData[1]} />
        </Box>
      </Box>

      <Box variant="section" className="mt-18">
        <TransactionHistory transactionHistory={revenueData[0]} />
      </Box>
    </Box>
  );
}
