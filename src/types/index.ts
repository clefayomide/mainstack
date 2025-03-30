import React from "react";

type TypographyVariantType = keyof React.JSX.IntrinsicElements;

export type TypographyPropType = {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
};

export type BalanceType = { wrapperClassName?: string };
