import { cva, type VariantProps } from "class-variance-authority";
import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm text-[#2c3e50] ring-offset-white transition-colors placeholder:text-[#a1aab8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-[#a1aab8] focus-visible:ring-[#4a90e2]",
        error:
          "border-[#e74c3c] focus-visible:ring-[#e74c3c]",
        success:
          "border-[#6edc6b] focus-visible:ring-[#6edc6b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
