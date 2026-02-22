import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content of the button */
  children: ReactNode;
  /** The visual style variant of the button */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  /** The size of the button */
  size?: "sm" | "md" | "lg";
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
}

/**
 * A customizable button component with multiple variants and sizes
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "skybin-button",
        `skybin-button--${variant}`,
        `skybin-button--${size}`,
        fullWidth && "skybin-button--full-width",
        loading && "skybin-button--loading",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="skybin-button__spinner" />}
      <span className={cn("skybin-button__content", loading && "skybin-button__content--hidden")}>
        {children}
      </span>
    </button>
  );
}
