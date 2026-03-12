import { cva } from "class-variance-authority";

/**
 * Shared label variant for all form field components.
 * Shows a required asterisk when required=true.
 */
export const labelVariants = cva("block text-sm font-medium mb-1.5", {
  variants: {
    required: {
      true: "after:content-['*'] after:ml-0.5 after:text-destructive",
      false: "",
    },
  },
  defaultVariants: {
    required: false,
  },
});
