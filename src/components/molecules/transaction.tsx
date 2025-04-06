import React from "react";
import Box from "../atoms/box";
import { Inflow, Outflow } from "@/icons";
import { TransactionPropType } from "@/types";
import { cva } from "class-variance-authority";
import { cn, formatMoney } from "@/lib/utils";
import { format } from "date-fns";

export default function Transaction({
  transactionType,
  variant,
  transaction,
}: Readonly<TransactionPropType>) {
  const isInflow = transactionType === "deposit";
  const icon = isInflow ? <Inflow /> : <Outflow />;

  const roundedBoxVariants = cva("", {
    variants: {
      variant: {
        deposit: "bg-[#E3FCF2]",
        withdrawal: "bg-[#F9E3E0]",
      },
    },
  });

  const statusVariants = cva("", {
    variants: {
      variant: {
        default: "text-[#56616B]",
        successful: "text-[#0EA163]",
        pending: "text-[#A77A07]",
        failed: "text-red-500",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  });
  return (
    <Box className="h-[49px] flex justify-between">
      <Box className="flex gap-5">
        <Box
          className={cn(
            "w-[48px] h-[48px] rounded-full flex justify-center items-center",
            roundedBoxVariants({ variant: transactionType })
          )}
        >
          {icon}
        </Box>
        <Box>
          <Box
            variant="h5"
            className="font-medium text-[15px] md:text-base leading-[24px] text-primary"
          >
            {transaction.metadata?.product_name ?? "Cash withdrawal"}
          </Box>
          <Box
            variant="p"
            className={cn(
              `text-xs md:text-sm capitalize font-medium leading-[16px]`,
              statusVariants({ variant })
            )}
          >
            {transaction.status}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          variant="h6"
          className="text-sm md:text-base text-right font-bold text-primary leading-[150%]"
        >
          {formatMoney(transaction.amount as number)}
        </Box>
        <Box
          variant="p"
          className="font-medium text-right mt-1 text-xs md:text-sm text-[#56616B] leading-[16px]"
        >
          {format(transaction.date as string, "PPP")}
        </Box>
      </Box>
    </Box>
  );
}
