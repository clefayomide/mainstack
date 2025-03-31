import React from "react";
import Balance from "../organisms/balance";
import Summary from "../organisms/summary";
import Box from "../atoms/box";
import { Chart } from "../molecules/chart";
import TransactionHistory from "../organisms/transaction-history";

export default function Revenue() {
  return (
    <Box>
      <Box variant="section" className="flex justify-between">
        <Box variant="section" className="w-[630px]">
          <Balance />
          <Chart />
        </Box>
        <Box variant="section" className="w-[271px]">
          <Summary />
        </Box>
      </Box>

      <Box variant="section" className="mt-18">
        <TransactionHistory />
      </Box>
    </Box>
  );
}
