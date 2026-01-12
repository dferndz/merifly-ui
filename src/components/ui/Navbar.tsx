import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const navbarVariants = cva(
  "flex items-center justify-between border-b bg-white px-4 py-3",
  {
    variants: {
      variant: {
        default: "border-[#f4f5f7]",
        solid: "border-transparent bg-[#4a90e2] text-white",
        transparent: "border-transparent bg-transparent",
      },
      position: {
        static: "static",
        fixed: "fixed top-0 left-0 right-0 z-50",
        sticky: "sticky top-0 z-50",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "static",
    },
  }
);

export interface NavbarProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, position, ...props }, ref) => {
    return (
      <nav
        className={cn(navbarVariants({ variant, position }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
