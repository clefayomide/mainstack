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
import { ChartPropType } from "@/types";
import { cn } from "@/lib/utils";

const chartConfig = {
  desktop: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart({ wrapperClassName, data }: Readonly<ChartPropType>) {
  return (
    <Card
      className={cn(
        "shadow-none border-none  mt-10 outline-none p-0",
        wrapperClassName
      )}
    >
      <CardContent className="px-0">
        <ChartContainer className="px-0" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
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
              dataKey="amount"
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
