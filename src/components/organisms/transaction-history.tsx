import React, { use } from "react";
import Box from "../atoms/box";
import { Button } from "../ui/button";
import { ChevronDown, Download } from "@/icons";
import Transaction from "../molecules/transaction";
import { FilterContext } from "@/context/filter";

function TransactionFilter() {
  const filterContext = use(FilterContext);

  return (
    <Box className="flex gap-5">
      <Button
        onClick={filterContext.update}
        className="h-[48px] bg-[#EFF1F6] w-[107px] text-base text-primary font-semibold"
      >
        Filter{" "}
        <Box variant="span">
          <ChevronDown />
        </Box>
      </Button>
      <Button className="h-[48px] bg-[#EFF1F6] w-[107px] text-base text-primary font-semibold">
        Export{" "}
        <Box variant="span">
          <Download />
        </Box>
      </Button>
    </Box>
  );
}

export default function TransactionHistory() {
  return (
    <Box>
      <Box className="flex justify-between h-[72px] pb-[24px] border-b border-[#EFF1F6]">
        <Box variant="section">
          <Box
            variant={"h3"}
            className="font-bold text-2xl leading-[32px] text-primary"
          >
            24 Transactions
          </Box>
          <Box
            variant="p"
            className="font-medium text-sm leading-[16px] text-[#56616B]"
          >
            Your transactions for the last 7 days
          </Box>
        </Box>
        <Box variant="section" className="hidden md:block">
          <TransactionFilter />
        </Box>
      </Box>

      <Box variant="section" className="mt-5 md:mt-10 flex flex-col gap-8">
        <Box variant="section" className="flex justify-end md:hidden">
          <TransactionFilter />
        </Box>
        <Transaction transactionType="deposit" />
        <Transaction variant="failed" transactionType="withdrawal" />
        <Transaction transactionType="deposit" />
        <Transaction variant="successful" transactionType="withdrawal" />
        <Transaction transactionType="deposit" />
        <Transaction variant="pending" transactionType="withdrawal" />
        <Transaction transactionType="deposit" />
        <Transaction variant="successful" transactionType="withdrawal" />
      </Box>
    </Box>
  );
}
