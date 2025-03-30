"use client";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartFooterLine } from "@/icons";
import Box from "../atoms/box";
const chartData = [
  { month: "January", desktop: 185 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="shadow-none border-none  mt-10 outline-none p-0">
      <CardContent className="px-0">
        <ChartContainer className="px-0" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid opacity={0} />
            <XAxis hide={true} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#FF5403"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start px-0 gap-2 text-sm">
        <ChartFooterLine />
        <Box className="flex justify-between w-full">
          <Box className="text-sm text-[#56616B] font-medium">Apr 1, 2022</Box>
          <Box className="text-sm text-[#56616B] font-medium">Apr 30, 2022</Box>
        </Box>
      </CardFooter>
    </Card>
  );
}
