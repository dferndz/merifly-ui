import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    variant: {
      default: "text-[#2c3e50]",
      muted: "text-[#a1aab8]",
      primary: "text-[#4a90e2]",
      secondary: "text-[#3bb0f3]",
      success: "text-[#6edc6b]",
      warning: "text-[#f1c40f]",
      error: "text-[#e74c3c]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "default",
    weight: "normal",
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, variant, weight, as: Component = "p", ...props }, ref) => {
    const Comp = Component as any;
    return (
      <Comp
        className={cn(textVariants({ size, variant, weight }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
