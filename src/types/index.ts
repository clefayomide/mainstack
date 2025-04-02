import React from "react";

type TypographyVariantType = keyof React.JSX.IntrinsicElements;

export type TypographyPropType = {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
};

export type BalancePropType = { wrapperClassName?: string };

export type TransactionPropType = {
  transactionType: "deposit" | "withdrawal";
  variant?: "default" | "successful" | "pending" | "failed";
};

export type ChartPropType = {
  wrapperClassName?: string;
};

type DatePickerClassNames = Partial<{
  triggerClassName: string;
}>;

export type DatePickerPropType = {
  classNames?: DatePickerClassNames;
};

export type TransactionFilterPropType = {
  classNames?: DatePickerClassNames;
  filters: { name: string }[];
  placeholder: string
};
