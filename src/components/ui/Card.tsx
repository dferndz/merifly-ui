import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border border-[#f4f5f7] bg-white text-[#2c3e50] shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-md",
        outlined: "border-[#a1aab8]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div className={cn(cardVariants({ variant }), className)} ref={ref} {...props} />
    );
  }
);

Card.displayName = "Card";

const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn(cardHeaderVariants(), className)} ref={ref} {...props} />;
  }
);

CardHeader.displayName = "CardHeader";

const cardContentVariants = cva("p-6 pt-0");

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn(cardContentVariants(), className)} ref={ref} {...props} />;
  }
);

CardContent.displayName = "CardContent";

const cardFooterVariants = cva("flex items-center p-6 pt-0");

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn(cardFooterVariants(), className)} ref={ref} {...props} />;
  }
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter, cardVariants };
