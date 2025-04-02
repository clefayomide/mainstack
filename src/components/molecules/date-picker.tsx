"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePickerPropType } from "@/types";
import Box from "../atoms/box";
import { DatePickerArrowDown } from "@/icons";

export default function DatePicker({
  classNames: { triggerClassName } = {},
}: Readonly<DatePickerPropType>) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger
        className={cn("w-full md:w-[200px]", triggerClassName)}
        asChild
      >
        <Button
          variant={"disabled"}
          className={cn(
            "justify-start rounded-[12px] text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <Box className="flex justify-between items-center w-full">
            {date ? (
              format(date, "PPP")
            ) : (
              <span className="font-medium text-sm leading-[16px] text-primary">
                Pick a date
              </span>
            )}
            <DatePickerArrowDown />
          </Box>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
