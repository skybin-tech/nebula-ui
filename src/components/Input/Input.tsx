import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text for the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** The size of the input */
  inputSize?: "sm" | "md" | "lg";
  /** Whether the input should take full width */
  fullWidth?: boolean;
}

/**
 * A customizable input component with label, helper text, and error states
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = "md",
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn("skybin-input-wrapper", fullWidth && "skybin-input-wrapper--full-width")}>
        {label && (
          <label htmlFor={inputId} className="skybin-input__label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "skybin-input",
            `skybin-input--${inputSize}`,
            error && "skybin-input--error",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className="skybin-input__error" role="alert">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${inputId}-helper`} className="skybin-input__helper">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
