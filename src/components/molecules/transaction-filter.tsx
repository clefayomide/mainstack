"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { TransactionFilterPropType } from "@/types";
import Box from "../atoms/box";
import { DatePickerArrowDown } from "@/icons";
import { Checkbox } from "../ui/checkbox";

export default function TransactionFilter({
  classNames: { triggerClassName } = {},
  filters,
  placeholder,
}: Readonly<TransactionFilterPropType>) {
  const [filter, setFilter] = useState("");
  return (
    <Popover>
      <PopoverTrigger className={cn("w-full", triggerClassName)} asChild>
        <Button
          variant={"disabled"}
          className={cn(
            "justify-start rounded-[12px] text-left font-normal",
            !filter && "text-muted-foreground"
          )}
        >
          <Box className="flex justify-between items-center w-full">
            {/* {filter || ( */}
            <span className="font-medium text-sm leading-[16px] text-primary">
              {filter || placeholder}
            </span>
            {/* // )} */}
            <DatePickerArrowDown />
          </Box>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full md:w-[401px] p-2 rounded-[12px] shadow-[0px_6px_12px_0px_#5C738314]"
        align="start"
      >
        <Box>
          {filters.map(({ name }) => {
            return (
              <Box key={name} className="p-[14px] h-[48px]">
                <Checkbox label={name} />
              </Box>
            );
          })}
        </Box>
      </PopoverContent>
    </Popover>
  );
}
