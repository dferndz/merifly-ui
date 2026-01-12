import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-full border border-[#4a90e2] text-[#4a90e2] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a90e2] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-[#4a90e2] checked:border-[#4a90e2]"
);

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof radioVariants> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(radioVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Radio.displayName = "Radio";

export { Radio, radioVariants };
