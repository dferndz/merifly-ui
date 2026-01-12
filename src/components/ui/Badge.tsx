import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#4a90e2] text-white",
        success:
          "border-transparent bg-[#6edc6b] text-[#2c3e50]",
        warning:
          "border-transparent bg-[#f1c40f] text-[#2c3e50]",
        error:
          "border-transparent bg-[#e74c3c] text-white",
        info:
          "border-transparent bg-[#3bb0f3] text-white",
        teal:
          "border-transparent bg-[#35c6b0] text-white",
        outline:
          "border-[#a1aab8] text-[#2c3e50]",
        skill:
          "border-transparent bg-[#6edc6b] text-[#2c3e50]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className={cn(badgeVariants({ variant }), className)} ref={ref} {...props} />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
