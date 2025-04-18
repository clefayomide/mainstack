import React from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

type TypographyVariantType = keyof React.JSX.IntrinsicElements;

export type TypographyPropType = {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
};

export type BalancePropType = {
  wrapperClassName?: string;
  balance: WalletResType["balance"];
};

export type TransactionPropType = {
  transactionType: "deposit" | "withdrawal";
  variant?: "default" | "successful" | "pending" | "failed";
  transaction: TransactionResType[0];
};

export type ChartPropType = {
  wrapperClassName?: string;
  data: {
    amount: number | undefined;
  }[];
};

type DatePickerClassNames = Partial<{
  triggerClassName: string;
}>;
type FieldPropType = ControllerRenderProps<FieldValues, string>;

export type FilterFormFieldPropType = {
  transactionStatuses: string[];
  transactionTypes: string[];
  endDate: Date | null | undefined;
  startDate: Date | null | undefined;
};
type FormHookPropType = UseFormReturn<
  FilterFormFieldPropType,
  never,
  FilterFormFieldPropType
>;

export type DatePickerPropType = {
  classNames?: DatePickerClassNames;
  field: FieldPropType;
};

export type TransactionFilterPropType = {
  classNames?: DatePickerClassNames;
  filters: { name: string }[];
  field: FieldPropType;
  form: FormHookPropType;
  triggerLabel: string;
};

export type StatusAndTypeKeyType = keyof Pick<
  FilterFormFieldPropType,
  "transactionTypes"
> &
  Pick<FilterFormFieldPropType, "transactionStatuses">;

export type WalletResType = {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
};

export type TransactionResType = Partial<{
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}>[];

export type ContextType = {
  isFilterOpen: boolean;
  update: () => void;
  filterItems: FilterFormFieldPropType | null;
  handleFilterItems: (items: FilterFormFieldPropType) => void;
  filterCount: number;
};

export type FilterStateType = {
  openFilter: boolean;
  filterItems: FilterFormFieldPropType | null;
};

export type BalanceSummaryType = Omit<WalletResType, "balance">;

export type BalanceSummaryPropType = {
  balanceSummary: Record<keyof BalanceSummaryType, number>;
};
