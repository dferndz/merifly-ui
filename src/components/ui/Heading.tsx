import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef, createElement } from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold text-[#2c3e50] tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg lg:text-xl",
    },
    variant: {
      default: "",
      primary: "text-[#4a90e2]",
      secondary: "text-[#3bb0f3]",
      muted: "text-[#a1aab8]",
    },
  },
  defaultVariants: {
    level: "h2",
    variant: "default",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, variant, as, ...props }, ref) => {
    const Component = as || level || "h2";

    return createElement(Component, {
      className: cn(headingVariants({ level: level || as, variant }), className),
      ref,
      ...props,
    });
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
