import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-md border transition-all relative disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border-primary hover:bg-primary/90 disabled:hover:bg-primary",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 disabled:hover:bg-secondary",
        outline:
          "bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground disabled:hover:bg-transparent disabled:hover:text-primary",
        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-accent hover:text-accent-foreground disabled:hover:bg-transparent",
        danger:
          "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90 disabled:hover:bg-destructive",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      fullWidth: {
        true: "w-full flex",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** The content of the button */
  children: ReactNode;
  /** Whether the button is in a loading state */
  loading?: boolean;
}

/**
 * A customizable button component with multiple variants and sizes
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled,
    className,
    style,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      style={{ cursor: "pointer", ...style }}
      {...props}
    >
      {loading && (
        <span className="size-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
      )}
      <span className={cn(loading && "invisible")}>{children}</span>
    </button>
  );
});
