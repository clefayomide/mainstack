import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "../app/page";
import { act } from "react";
import { Transaction } from "@/services/transaction";
import { walletMockData } from "@/__mocks__/api";
import "@testing-library/jest-dom";
import { formatMoney } from "@/lib/utils";

const transactionService = new Transaction();

describe("Revenue Page", () => {
  beforeEach(async () => {
    vi.spyOn(transactionService, "getWalletInfo").mockResolvedValue(
      walletMockData
    );
    await act(async () => {
      render(<Page />);
    });
  });

  it("Should show a loading indicator", async () => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render accurate wallet available balance based on fetched data", async () => {
    const balance = walletMockData.total_revenue - walletMockData.total_payout;
    await waitFor(
      async () => {
        const balanceElement = await screen.findByTestId("balance");
        expect(balanceElement).toHaveTextContent(formatMoney(balance));
      },
      { timeout: 5000 }
    );
  });

  it("should render accurate total_payout/total_revenue/pending_payout/ledger_balance based on fetched data", async () => {
    const testIds = [
      "total_payout",
      "total_revenue",
      "ledger_balance",
      "pending_payout",
    ];

    for (const id of testIds) {
      await waitFor(async () => {
        const element = await screen.findByTestId(id);
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(
          formatMoney(walletMockData[id as keyof typeof walletMockData])
        );
      });
    }
  });
});
