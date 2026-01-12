import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:
          "border-[#f4f5f7] bg-white text-[#2c3e50]",
        success:
          "border-[#6edc6b] bg-[#6edc6b]/10 text-[#2c3e50] [&>svg]:text-[#6edc6b]",
        warning:
          "border-[#f1c40f] bg-[#f1c40f]/10 text-[#2c3e50] [&>svg]:text-[#f1c40f]",
        error:
          "border-[#e74c3c] bg-[#e74c3c]/10 text-[#2c3e50] [&>svg]:text-[#e74c3c]",
        info:
          "border-[#3bb0f3] bg-[#3bb0f3]/10 text-[#2c3e50] [&>svg]:text-[#3bb0f3]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";

const alertTitleVariants = cva("mb-1 font-medium leading-none tracking-tight");

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h5 className={cn(alertTitleVariants(), className)} ref={ref} {...props} />
    );
  }
);

AlertTitle.displayName = "AlertTitle";

const alertDescriptionVariants = cva("text-sm [&_p]:leading-relaxed");

export interface AlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(alertDescriptionVariants(), className)} ref={ref} {...props} />
    );
  }
);

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
