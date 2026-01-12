import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0 bg-[#a1aab8]", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    const ariaOrientation = orientation || "horizontal";
    return (
      <div
        className={cn(dividerVariants({ orientation }), className)}
        role="separator"
        aria-orientation={ariaOrientation}
        ref={ref}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };
