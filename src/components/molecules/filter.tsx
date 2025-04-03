import React, { use } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Box from "../atoms/box";
import { Close } from "@/icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import DatePicker from "./date-picker";
import TransactionFilter from "./transaction-filter";
import { FilterContext } from "@/context/filter";
import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FilterFormFieldPropType } from "@/types";

export default function Filter() {
  const form = useForm<FilterFormFieldPropType>({
    defaultValues: {
      transactionStatuses: [],
      transactionTypes: [],
      endDate: null,
      startDate: null,
    },
  });

  const { transactionStatuses, transactionTypes } = useWatch({
    control: form.control,
  });

  const filterContext = use(FilterContext);

  const filterBtns = [
    { name: "Today", className: "w-[70px]" },
    { name: "Last 7 days", className: "w-[98px]" },
    { name: "This month", className: "w-[99px]" },
    { name: "Last 3 months", className: "w-[116px]" },
  ];

  const transactionTypeOptions = [
    { name: "Store Transactions" },
    { name: "Get Tipped" },
    { name: "Withdrawal" },
    { name: "Chargebacks" },
    { name: "Cashbacks" },
    { name: "Refer & Earn" },
  ];

  const transactionStatusOptions = [
    { name: "Successful" },
    { name: "Failed" },
    { name: "Pending" },
  ];

  const handleSubmit = (data: FilterFormFieldPropType) => {
    filterContext.handleFilterItems(data);
  };
  const handleReset = () => {
    form.reset();
    filterContext.handleFilterItems({
      transactionStatuses: [],
      transactionTypes: [],
      endDate: null,
      startDate: null,
    });
  };

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
        <Box className="flex flex-wrap gap-[6px]">
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box className="h-[276px] mt-8">
              <FormLabel>Date Range</FormLabel>
              <Box className="flex justify-between md:justify-start gap-2 mt-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="w-[48%] md:w-[200px]">
                      <FormControl>
                        <DatePicker field={field} />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="w-[48%] md:w-[200px]">
                      <FormControl>
                        <DatePicker field={field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Box>

              <Box className="mt-7">
                <FormField
                  control={form.control}
                  name="transactionTypes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction Type</FormLabel>
                      <FormControl>
                        <TransactionFilter
                          field={field}
                          form={form}
                          filters={transactionTypeOptions}
                          triggerLabel={
                            transactionTypes?.join(", ") ||
                            "Select transaction type"
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Box>

              <Box className="mt-7">
                <FormField
                  control={form.control}
                  name="transactionStatuses"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Transaction Status</FormLabel>
                      <FormControl className="w-full">
                        <TransactionFilter
                          field={field}
                          form={form}
                          filters={transactionStatusOptions}
                          triggerLabel={
                            transactionStatuses?.join(", ") ||
                            "Select transaction status"
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </Box>
            </Box>

            <Box className="flex justify-between md:gap-[16px] absolute bottom-6 w-full">
              <Button
                onClick={handleReset}
                type="button"
                variant={"outline"}
                className="w-[48%] md:w-[190px]"
              >
                Cancel
              </Button>
              <Button type="submit" className="w-[48%] md:w-[190px]">
                Apply
              </Button>
            </Box>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
