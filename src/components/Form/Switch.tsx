import { forwardRef, useId, useContext, useEffect } from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { useController, useFormContext as useRHFFormContext, type FieldValues, type FieldPath, type Control } from "react-hook-form";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { FormConfigContext, type FormConfig, type FieldValidationRules } from "../Form/context";
import { Switch as ShadcnSwitch } from "../../primitives/switch";
import { Label } from "../../primitives/label";
import type * as SwitchPrimitives from "@radix-ui/react-switch";

const switchSizeVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
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
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export interface SwitchProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, "name" | "checked" | "onCheckedChange" | "required">,
    VariantProps<typeof switchSizeVariants> {
  /** Field name - required for form integration */
  name: TName;
  /** Label text for the switch */
  label?: ReactNode;
  /** Helper text displayed below the switch */
  helperText?: string;
  /** Whether to show the error message */
  showError?: boolean;
  /** Custom error message (overrides form error) */
  error?: string;
  /** External control (for use outside Form) */
  control?: Control<TFieldValues>;
  /** Text to show when checked */
  checkedText?: ReactNode;
  /** Text to show when unchecked */
  uncheckedText?: ReactNode;
  
  // Validation props
  /** Field is required (must be on) */
  required?: boolean | string;
  /** Custom validation function */
  validate?: (value: unknown) => boolean | string | Promise<boolean | string>;
}

/**
 * Switch component with form integration
 * 
 * This is a wrapper around the shadcn/ui Switch primitive that adds:
 * - Form integration with react-hook-form
 * - Automatic validation registration
 * - Label, helper text, and error message support
 * - Checked/unchecked text display
 * 
 * @example
 * ```tsx
 * // Inside a Form component
 * <Switch name="notifications" label="Enable notifications" />
 * <Switch name="terms" label="Accept terms" required="You must accept the terms" />
 * <Switch name="darkMode" label="Dark mode" checkedText="On" uncheckedText="Off" />
 * ```
 */
function SwitchInner<
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
    className,
    disabled,
    id: providedId,
    control: externalControl,
    checkedText,
    uncheckedText,
    // Validation props
    required,
    validate,
    ...props
  }: SwitchProps<TFieldValues, TName>,
  ref: React.ForwardedRef<React.ElementRef<typeof SwitchPrimitives.Root>>
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
  const isChecked = field.value ?? false;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-3">
        <ShadcnSwitch
          {...props}
          ref={ref}
          id={inputId}
          checked={isChecked}
          onCheckedChange={(checked) => field.onChange(checked)}
          disabled={effectiveDisabled}
          aria-labelledby={label ? `${inputId}-label` : undefined}
          className={cn(
            switchSizeVariants({ size: effectiveSize }),
            className
          )}
        />
        
        {(checkedText || uncheckedText) && (
          <span className="text-sm text-muted-foreground">
            {isChecked ? checkedText : uncheckedText}
          </span>
        )}
        
        {label && (
          <Label
            id={`${inputId}-label`}
            htmlFor={inputId}
            className={labelVariants({ disabled: effectiveDisabled })}
          >
            {label}
          </Label>
        )}
      </div>

      {showError && hasError && (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}
      
      {helperText && !hasError && (
        <p className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}

// Use forwardRef with generic support
export const Switch = forwardRef(SwitchInner) as <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SwitchProps<TFieldValues, TName> & { ref?: React.ForwardedRef<React.ElementRef<typeof SwitchPrimitives.Root>> }
) => React.ReactElement;

(Switch as React.FC).displayName = "Switch";
