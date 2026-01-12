import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const colVariants = cva("", {
  variants: {
    span: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full",
    },
    spanMd: {
      1: "md:col-span-1",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
      5: "md:col-span-5",
      6: "md:col-span-6",
      7: "md:col-span-7",
      8: "md:col-span-8",
      9: "md:col-span-9",
      10: "md:col-span-10",
      11: "md:col-span-11",
      12: "md:col-span-12",
    },
    spanLg: {
      1: "lg:col-span-1",
      2: "lg:col-span-2",
      3: "lg:col-span-3",
      4: "lg:col-span-4",
      5: "lg:col-span-5",
      6: "lg:col-span-6",
      7: "lg:col-span-7",
      8: "lg:col-span-8",
      9: "lg:col-span-9",
      10: "lg:col-span-10",
      11: "lg:col-span-11",
      12: "lg:col-span-12",
    },
  },
  defaultVariants: {
    span: 1,
  },
});

export interface ColProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colVariants> {}

const Col = forwardRef<HTMLDivElement, ColProps>(
  ({ className, span, spanMd, spanLg, ...props }, ref) => {
    return (
      <div
        className={cn(colVariants({ span, spanMd, spanLg }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Col.displayName = "Col";

export { Col, colVariants };
