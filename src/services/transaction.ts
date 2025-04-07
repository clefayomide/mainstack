import { api } from "@/axios";
import { TransactionResType, WalletResType } from "@/types";

export class Transaction {
  async getWalletInfo() {
    try {
      const response = await api.get<null, { data: WalletResType }>(
        `/wallet`
        //   {
        //   headers: {
        //     Accept: "*/*",
        //     "Content-Type": "application/json",
        //     "Accept-Encoding": "gzip, deflate, br",
        //   },
        // }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching wallet info:", error);
      throw new Error("Failed to fetch wallet info");
    }
  }

  async getTransactions() {
    try {
      const response = await api.get<null, { data: TransactionResType }>(
        `/transactions`
        // {
        //   headers: {
        //     Accept: "*/*",
        //     "Content-Type": "application/json",
        //     "Accept-Encoding": "gzip, deflate, br",
        //   },
        // }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw new Error("Failed to fetch transactions");
    }
  }
}
