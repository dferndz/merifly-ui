import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div className={cn(avatarVariants({ size }), className)} ref={ref} {...props} />
    );
  }
);

Avatar.displayName = "Avatar";

const avatarImageVariants = cva("aspect-square h-full w-full object-cover");

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <img className={cn(avatarImageVariants(), className)} ref={ref} {...props} />
    );
  }
);

AvatarImage.displayName = "AvatarImage";

const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center rounded-full bg-[#f4f5f7] text-[#2c3e50] font-medium"
);

export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {}

const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(avatarFallbackVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
