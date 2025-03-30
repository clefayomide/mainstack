import { cn } from "@/lib/utils";
import { TypographyPropType } from "@/types";

export default function Box(props: Readonly<TypographyPropType>) {
  const { variant: Variant = "div", children, className = "", ...rest } = props;
  return (
    <Variant className={cn("", className)} {...rest}>
      {children}
    </Variant>
  );
}
