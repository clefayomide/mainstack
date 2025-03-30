import React from "react";
import Balance from "../organisms/balance";
import Summary from "../organisms/summary";
import Box from "../atoms/box";
import { Chart } from "../molecules/chart";

export default function Revenue() {
  return (
    <Box className="flex justify-between">
      <Box variant="section" className="w-[765.21px]">
        <Balance />
        <Chart />
      </Box>
      <Box variant="section" className="w-[271px]">
        <Summary />
      </Box>
    </Box>
  );
}
