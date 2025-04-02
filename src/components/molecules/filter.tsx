import React, { use } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Box from "../atoms/box";
import { Close } from "@/icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import DatePicker from "./date-picker";
import TransactionFilter from "./transaction-filter";
import { FilterContext } from "@/context/filter";

export default function Filter() {
  const filterContext = use(FilterContext);

  const filterBtns = [
    { name: "Today", className: "w-[70px]" },
    { name: "Last 7 days", className: "w-[98px]" },
    { name: "This month", className: "w-[99px]" },
    { name: "Last 3 months", className: "w-[116px]" },
  ];

  const transactionTypes = [
    { name: "Store Transactions" },
    { name: "Get Tipped" },
    { name: "Withdrawals" },
    { name: "Chargebacks" },
    { name: "Cashbacks" },
    { name: "Refer & Earn" },
  ];

  const transactionStatus = [
    { name: "Successful" },
    { name: "Failed" },
    { name: "Pending" },
  ];
  return (
    <Card className="w-full h-full md:w-[456px] rounded-[20px] bg-white px-6 py-0">
      <CardHeader className="h-[74px] p-0 flex justify-between items-center">
        <Box variant="h1" className="font-bold text-[24px] text-primary">
          Filter
        </Box>
        <button onClick={filterContext.update}>
          <Close />
        </button>
      </CardHeader>
      <CardContent className="h-full relative p-0">
        <Box className="flex gap-2">
          {filterBtns.map(({ name, className }) => {
            return (
              <Button
                key={name}
                variant={"outline"}
                className={cn("h-[36px] px-[18px] font-semibold", className)}
              >
                {name}
              </Button>
            );
          })}
        </Box>

        <Box className="h-[276px] mt-8">
          <Box className="flex justify-between">
            <DatePicker />
            <DatePicker />
          </Box>

          <Box className="mt-10">
            <TransactionFilter
              placeholder="Select transaction type"
              filters={transactionTypes}
            />
          </Box>

          <Box className="mt-10">
            <TransactionFilter
              placeholder="Select transaction status"
              filters={transactionStatus}
            />
          </Box>
        </Box>

        <Box className="flex gap-[16px] absolute bottom-6">
          <Button variant={"outline"} className="w-[190px]">
            Cancel
          </Button>
          <Button className="w-[190px]">Apply</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
