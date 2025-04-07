import { afterEach, beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import AxiosMock, { AxiosResponse } from "axios";
import { walletMockData } from "@/__mocks__/api";
import { WalletResType } from "@/types";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

beforeEach(() => {
  AxiosMock.get = vi.fn(
    (url: string): Promise<AxiosResponse<WalletResType>> => {
      if (url.includes("/wallet")) {
        return Promise.resolve({
          data: walletMockData,
        } as AxiosResponse<WalletResType>);
      }
      return Promise.resolve({ data: {} } as AxiosResponse<WalletResType>);
    }
  ) as typeof AxiosMock.get;
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
