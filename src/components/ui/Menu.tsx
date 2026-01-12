import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const menuVariants = cva(
  "min-w-[8rem] overflow-hidden rounded-md border border-[#f4f5f7] bg-white p-1 text-[#2c3e50] shadow-md"
);

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(menuVariants(), className)} role="menu" ref={ref} {...props} />
    );
  }
);

Menu.displayName = "Menu";

const menuItemVariants = cva(
  "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[#f4f5f7] focus:bg-[#f4f5f7] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <div
        className={cn(menuItemVariants(), className)}
        role="menuitem"
        data-disabled={disabled ? "" : undefined}
        ref={ref}
        {...props}
      />
    );
  }
);

MenuItem.displayName = "MenuItem";

const menuSeparatorVariants = cva("-mx-1 my-1 h-px bg-[#f4f5f7]");

export interface MenuSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(menuSeparatorVariants(), className)}
        role="separator"
        ref={ref}
        {...props}
      />
    );
  }
);

MenuSeparator.displayName = "MenuSeparator";

export { Menu, MenuItem, MenuSeparator, menuVariants, menuItemVariants };
