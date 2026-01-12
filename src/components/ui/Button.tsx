import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#4a90e2] text-white hover:bg-[#3a7bc8] focus-visible:ring-[#4a90e2]",
        secondary:
          "bg-[#3bb0f3] text-white hover:bg-[#2a9ad9] focus-visible:ring-[#3bb0f3]",
        outline:
          "border border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2] hover:text-white focus-visible:ring-[#4a90e2]",
        ghost:
          "text-[#4a90e2] hover:bg-[#f4f5f7] hover:text-[#4a90e2] focus-visible:ring-[#4a90e2]",
        danger:
          "bg-[#e74c3c] text-white hover:bg-[#c0392b] focus-visible:ring-[#e74c3c]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
