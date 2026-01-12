import { cva, type VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none text-[#2c3e50] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return <label className={cn(labelVariants(), className)} ref={ref} {...props} />;
  }
);

Label.displayName = "Label";

export { Label, labelVariants };
