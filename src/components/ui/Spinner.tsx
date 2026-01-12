import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      variant: {
        primary: "text-[#4a90e2]",
        secondary: "text-[#3bb0f3]",
        success: "text-[#6edc6b]",
        error: "text-[#e74c3c]",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label = "Loading...", ...props }, ref) => {
    return (
      <div
        role="status"
        className={cn(spinnerVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
