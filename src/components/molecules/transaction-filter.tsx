"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { StatusAndTypeKeyType, TransactionFilterPropType } from "@/types";
import Box from "../atoms/box";
import { DatePickerArrowDown } from "@/icons";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function TransactionFilter({
  classNames: { triggerClassName } = {},
  filters,
  field,
  triggerLabel,
  form,
}: Readonly<TransactionFilterPropType>) {
  const handleChecked = (
    checked: CheckedState,
    field: StatusAndTypeKeyType,
    value: string
  ) => {
    if (checked) {
      form.setValue(field, [...(form.getValues(field) as string[]), value]);
    } else {
      form.setValue(
        field,
        (form.getValues(field) as string[]).filter((item) => item !== value)
      );
    }
  };
  return (
    <Popover>
      <PopoverTrigger
        className={cn("min-w-full max-w-full w-full", triggerClassName)}
        asChild
      >
        <Button
          variant={"disabled"}
          className={cn(
            "justify-start h-[48px] rounded-[12px] text-left font-normal",
            !triggerLabel && "text-muted-foreground"
          )}
        >
          <Box className="flex justify-between items-center">
            <span className="font-medium capitalize text-sm leading-[16px] text-primary">
              {triggerLabel}
            </span>
            <DatePickerArrowDown />
          </Box>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[84vw]  sm:w-auto md:w-[401px] p-2 rounded-[12px] shadow-[0px_6px_12px_0px_#5C738314]"
        align="start"
      >
        <Box className="">
          {filters.map(({ name }) => {
            return (
              <Box key={name} className="p-[14px] h-[48px]">
                <Checkbox
                  {...field}
                  onCheckedChange={(state) =>
                    handleChecked(
                      state,
                      field.name as StatusAndTypeKeyType,
                      name.toLowerCase()
                    )
                  }
                  checked={field.value.includes(name.toLowerCase())}
                  value={name.toLowerCase()}
                  label={name}
                />
              </Box>
            );
          })}
        </Box>
      </PopoverContent>
    </Popover>
  );
}
