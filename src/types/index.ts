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
type FieldPropType = ControllerRenderProps<FieldValues, string>;

export type FilterFormFieldPropType = {
  transactionStatuses: string[];
  transactionTypes: string[];
  endDate: Date | null;
  startDate: Date | null;
};
type FormHookPropType = UseFormReturn<
  FilterFormFieldPropType,
  any,
  FilterFormFieldPropType
>;

export type DatePickerPropType = {
  classNames?: DatePickerClassNames;
  field: FieldPropType;
};

export type TransactionFilterPropType = {
  classNames?: DatePickerClassNames;
  filters: { name: string }[];
  // placeholder: string;
  field: FieldPropType;
  form: FormHookPropType;
  // setCheckBoxSelection: SetCheckBoxSelection;
  triggerLabel: string;
};

export type StatusAndTypeKeyType = keyof Pick<
  FilterFormFieldPropType,
  "transactionTypes"
> &
  Pick<FilterFormFieldPropType, "transactionStatuses">;
