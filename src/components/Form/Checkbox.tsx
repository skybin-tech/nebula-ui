'use client';

import { forwardRef, useId, useContext, useEffect } from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { useController, useFormContext as useRHFFormContext, type FieldValues, type FieldPath, type Control } from "react-hook-form";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { FormConfigContext, type FormConfig, type FieldValidationRules } from "../Form/context";
import { Checkbox as ShadcnCheckbox } from "../../primitives/checkbox";
import { Label } from "../../primitives/label";
import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const checkboxSizeVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const labelVariants = cva(
  "text-sm font-medium cursor-pointer select-none",
  {
    variants: {
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      required: false,
      disabled: false,
    },
  }
);

export interface CheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "name" | "checked" | "onCheckedChange" | "required">,
    VariantProps<typeof checkboxSizeVariants> {
  /** Field name - required for form integration */
  name: TName;
  /** Label text for the checkbox */
  label?: ReactNode;
  /** Helper text displayed below the checkbox */
  helperText?: string;
  /** Whether to show the error message */
  showError?: boolean;
  /** Custom error message (overrides form error) */
  error?: string;
  /** External control (for use outside Form) */
  control?: Control<TFieldValues>;
  /** Variant style */
  variant?: "default" | "error";
  
  // Validation props
  /** Field is required (must be checked) */
  required?: boolean | string;
  /** Custom validation function */
  validate?: (value: unknown) => boolean | string | Promise<boolean | string>;
}

/**
 * Checkbox component with form integration
 * 
 * This is a wrapper around the shadcn/ui Checkbox primitive that adds:
 * - Form integration with react-hook-form
 * - Automatic validation registration
 * - Label, helper text, and error message support
 * 
 * @example
 * ```tsx
 * // Inside a Form component
 * <Checkbox name="terms" label="I agree to the terms and conditions" required />
 * <Checkbox name="newsletter" label="Subscribe to newsletter" />
 * ```
 */
function CheckboxInner<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  {
    name,
    label,
    helperText,
    showError = true,
    error: customError,
    size,
    variant,
    className,
    disabled,
    id: providedId,
    control: externalControl,
    // Validation props
    required,
    validate,
    ...props
  }: CheckboxProps<TFieldValues, TName>,
  ref: React.ForwardedRef<React.ElementRef<typeof CheckboxPrimitive.Root>>
) {
  const generatedId = useId();
  const inputId = providedId ?? generatedId;
  
  // Try to get form context
  const formConfigContext = useContext(FormConfigContext);
  const formConfig: FormConfig = formConfigContext ?? {};
  
  // Get form context from react-hook-form
  const rhfContext = useRHFFormContext<TFieldValues>();
  const control = externalControl ?? rhfContext?.control;

  // Register validation rules with the form
  useEffect(() => {
    if (formConfigContext?.registerFieldValidation) {
      const rules: FieldValidationRules = {};
      
      if (required !== undefined) rules.required = required;
      if (validate !== undefined) rules.validate = validate;

      formConfigContext.registerFieldValidation({
        name: name as string,
        type: "boolean",
        rules,
      });

      return () => {
        formConfigContext.unregisterFieldValidation(name as string);
      };
    }
  }, [formConfigContext, name, required, validate]);

  // Use controller for form integration
  const { field, fieldState } = useController<TFieldValues, TName>({
    name,
    control,
  });

  const fieldError = fieldState.error?.message;
  const errorMessage = customError ?? fieldError;
  const hasError = !!errorMessage;
  
  // Merge sizes - prop takes precedence over form config
  const effectiveSize = size ?? formConfig.size ?? "md";
  const effectiveDisabled = disabled ?? formConfig.disabled;
  
  // Determine variant based on error state
  const effectiveVariant = hasError ? "error" : variant;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <ShadcnCheckbox
          {...props}
          ref={ref}
          id={inputId}
          checked={field.value ?? false}
          onCheckedChange={(checked) => field.onChange(checked === true)}
          onBlur={field.onBlur}
          disabled={effectiveDisabled}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          className={cn(
            checkboxSizeVariants({ size: effectiveSize }),
            effectiveVariant === "error" && "border-destructive",
            className
          )}
        />
        
        {label && (
          <Label
            htmlFor={inputId}
            className={labelVariants({ required: !!required, disabled: effectiveDisabled })}
          >
            {label}
          </Label>
        )}
      </div>

      {showError && hasError && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-destructive ml-7"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
      
      {helperText && !hasError && (
        <p
          id={`${inputId}-helper`}
          className="text-sm text-muted-foreground ml-7"
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

// Use forwardRef with generic support
export const Checkbox = forwardRef(CheckboxInner) as <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: CheckboxProps<TFieldValues, TName> & { ref?: React.ForwardedRef<React.ElementRef<typeof CheckboxPrimitive.Root>> }
) => React.ReactElement;

(Checkbox as React.FC).displayName = "Checkbox";
