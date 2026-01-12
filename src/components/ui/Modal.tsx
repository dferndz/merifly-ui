import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const modalOverlayVariants = cva(
  "fixed inset-0 z-50 bg-[#2c3e50]/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
);

export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, isOpen, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        className={cn(modalOverlayVariants(), className)}
        data-state={isOpen ? "open" : "closed"}
        ref={ref}
        {...props}
      />
    );
  }
);

ModalOverlay.displayName = "ModalOverlay";

const modalContentVariants = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#f4f5f7] bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
);

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, isOpen, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        className={cn(modalContentVariants(), className)}
        data-state={isOpen ? "open" : "closed"}
        role="dialog"
        aria-modal="true"
        ref={ref}
        {...props}
      />
    );
  }
);

ModalContent.displayName = "ModalContent";

const modalHeaderVariants = cva(
  "flex flex-col space-y-1.5 text-center sm:text-left"
);

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(modalHeaderVariants(), className)} ref={ref} {...props} />
    );
  }
);

ModalHeader.displayName = "ModalHeader";

const modalFooterVariants = cva(
  "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
);

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(modalFooterVariants(), className)} ref={ref} {...props} />
    );
  }
);

ModalFooter.displayName = "ModalFooter";

const modalTitleVariants = cva(
  "text-lg font-semibold leading-none tracking-tight text-[#2c3e50]"
);

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2 className={cn(modalTitleVariants(), className)} ref={ref} {...props} />
    );
  }
);

ModalTitle.displayName = "ModalTitle";

const modalDescriptionVariants = cva("text-sm text-[#a1aab8]");

export interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p className={cn(modalDescriptionVariants(), className)} ref={ref} {...props} />
    );
  }
);

ModalDescription.displayName = "ModalDescription";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, children, ...props }, ref) => {
    return (
      <>
        <ModalOverlay isOpen={isOpen} />
        <ModalContent isOpen={isOpen} ref={ref} {...props}>
          {children}
        </ModalContent>
      </>
    );
  }
);

Modal.displayName = "Modal";

export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
};
