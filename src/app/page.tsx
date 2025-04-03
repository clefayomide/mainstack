import Revenue from "@/components/templates/revenue";
import { Transaction } from "@/services/transaction";
import { Suspense } from "react";

export default function Home() {
  const transactionService = new Transaction();
  const dataPromise = Promise.all([
    transactionService.getTransactions(),
    transactionService.getWalletInfo(),
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Revenue dataPromise={dataPromise} />
    </Suspense>
  );
}
