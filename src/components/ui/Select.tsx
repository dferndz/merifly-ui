import { cva, type VariantProps } from "class-variance-authority";
import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-[#2c3e50] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[#a1aab8] focus-visible:ring-[#4a90e2]",
        error:
          "border-[#e74c3c] focus-visible:ring-[#e74c3c]",
        success:
          "border-[#6edc6b] focus-visible:ring-[#6edc6b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <select
        className={cn(selectVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select, selectVariants };
