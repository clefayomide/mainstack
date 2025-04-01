import React from "react";
import Balance from "../organisms/balance";
import Summary from "../organisms/summary";
import Box from "../atoms/box";
import { Chart } from "../molecules/chart";
import TransactionHistory from "../organisms/transaction-history";

export default function Revenue() {
  return (
    <Box>
      <Box
        variant="section"
        className="flex flex-col md:flex-row justify-between"
      >
        <Box variant="section" className="w-full md:w-[400px] xl:w-[630px]">
          <Balance />
          <Chart wrapperClassName="mt-32 lg:mt-[20px] xl:mt-auto" />
        </Box>
        <Box variant="section" className="mt-14 md:mt-auto w-full md:w-[260px] lg:w-[271px]">
          <Summary />
        </Box>
      </Box>

      <Box variant="section" className="mt-18">
        <TransactionHistory />
      </Box>
    </Box>
  );
}
