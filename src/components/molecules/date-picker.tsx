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
  field,
}: Readonly<DatePickerPropType>) {
  return (
    <Popover>
      <PopoverTrigger
        className={cn("", triggerClassName)}
        asChild
      >
        <Button
          variant={"disabled"}
          className={cn(
            "justify-start h-[48px] rounded-[12px] text-left font-normal",
            !field.value && "text-muted-foreground"
          )}
        >
          <Box className="flex justify-between items-center w-full">
            {field.value ? (
              format(field.value, "PPP")
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
          selected={field.value}
          onSelect={field.onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
