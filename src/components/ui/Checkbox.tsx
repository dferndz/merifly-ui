import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-[#4a90e2] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a90e2] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-[#4a90e2] checked:text-white"
);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={cn(checkboxVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
