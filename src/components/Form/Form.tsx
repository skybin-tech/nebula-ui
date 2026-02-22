import { useCallback, useState, type ReactNode } from "react";
import {
  useForm,
  FormProvider as RHFFormProvider,
  type UseFormReturn,
  type FieldValues,
  type UseFormProps,
  type SubmitHandler,
  type SubmitErrorHandler,
  type Resolver,
  type Path,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  FormConfigContext, 
  defaultFormConfig, 
  useFieldValidationRegistry,
  type FormConfig, 
  type FormContextValue 
} from "./context";

/**
 * Props for the Form component
 */
export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown
> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "onError"> {
  /** Base Zod schema for validation (will be extended by field props) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: z.ZodType<TFieldValues, any, any>;
  /** Default values for the form */
  defaultValues?: UseFormProps<TFieldValues, TContext>["defaultValues"];
  /** Values to reset the form to */
  values?: UseFormProps<TFieldValues, TContext>["values"];
  /** Submit handler */
  onSubmit?: SubmitHandler<TFieldValues>;
  /** Error handler */
  onError?: SubmitErrorHandler<TFieldValues>;
  /** Form configuration */
  config?: FormConfig;
  /** Children */
  children?: ReactNode;
  /** External form instance (for controlled forms) */
  form?: UseFormReturn<TFieldValues>;
  /** Validation mode */
  mode?: UseFormProps<TFieldValues, TContext>["mode"];
  /** Revalidation mode */
  reValidateMode?: UseFormProps<TFieldValues, TContext>["reValidateMode"];
  /** Custom resolver (overrides schema) */
  resolver?: Resolver<TFieldValues>;
}

/**
 * Form component that provides form context and validation
 * 
 * Child components like TextBox can register their validation rules automatically.
 * 
 * @example
 * ```tsx
 * // Validation is automatically built from component props
 * <Form onSubmit={handleSubmit} defaultValues={{ username: "", email: "" }}>
 *   <TextBox name="username" label="Username" required minLength={3} maxLength={50} />
 *   <TextBox name="email" label="Email" type="email" required email />
 *   <Button type="submit">Submit</Button>
 * </Form>
 * 
 * // Or with a base schema that gets extended
 * const baseSchema = z.object({
 *   username: z.string(),
 *   email: z.string(),
 * });
 * 
 * <Form schema={baseSchema} onSubmit={handleSubmit}>
 *   <TextBox name="username" required minLength={3} /> // Adds required + minLength
 *   <TextBox name="email" required email /> // Adds required + email validation
 * </Form>
 * ```
 */
export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown
>({
  schema: baseSchema,
  defaultValues,
  values,
  onSubmit,
  onError,
  config,
  children,
  form: externalForm,
  mode = "onBlur",
  reValidateMode = "onChange",
  resolver: customResolver,
  ...formProps
}: FormProps<TFieldValues, TContext>) {
  const mergedConfig = { ...defaultFormConfig, ...config };
  
  // Field validation registry
  const {
    registerFieldValidation: baseRegister,
    unregisterFieldValidation: baseUnregister,
    getValidationSchema,
  } = useFieldValidationRegistry();

  // Track schema version for re-renders
  const [schemaVersion, setSchemaVersion] = useState(0);

  // Wrap register to trigger re-render
  const registerFieldValidation = useCallback((field: Parameters<typeof baseRegister>[0]) => {
    baseRegister(field);
    setSchemaVersion(v => v + 1);
  }, [baseRegister]);

  // Wrap unregister to trigger re-render
  const unregisterFieldValidation = useCallback((name: string) => {
    baseUnregister(name);
    setSchemaVersion(v => v + 1);
  }, [baseUnregister]);

  // Build dynamic resolver that combines base schema with field validations
  const buildResolver = useCallback((): Resolver<TFieldValues> | undefined => {
    if (customResolver) {
      return customResolver;
    }

    // Get field-based schema
    const fieldSchema = getValidationSchema();
    
    // Merge with base schema if provided
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let finalSchema: z.ZodType<any, any, any>;
    
    if (baseSchema) {
      // Merge base schema with field schema
      // Field schema takes precedence for overlapping fields
      if (baseSchema instanceof z.ZodObject) {
        finalSchema = baseSchema.merge(fieldSchema);
      } else {
        finalSchema = fieldSchema;
      }
    } else {
      finalSchema = fieldSchema;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return zodResolver(finalSchema) as any;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseSchema, customResolver, getValidationSchema, schemaVersion]);

  // Create internal form
  const internalForm = useForm<TFieldValues>({
    resolver: buildResolver(),
    defaultValues,
    values,
    mode,
    reValidateMode,
  });

  const form = externalForm ?? internalForm;

  // Trigger validation for a specific field
  const triggerValidation = useCallback(async (name: string) => {
    return form.trigger(name as Path<TFieldValues>);
  }, [form]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      form.handleSubmit(onSubmit, onError)(e);
    }
  };

  const contextValue: FormContextValue<TFieldValues> = {
    form,
    registerFieldValidation,
    unregisterFieldValidation,
    getValidationSchema,
    triggerValidation,
    ...mergedConfig,
  };

  return (
    <FormConfigContext.Provider value={contextValue as FormContextValue}>
      <RHFFormProvider {...form}>
        <form
          {...formProps}
          onSubmit={handleSubmit}
          className={formProps.className}
          noValidate
        >
          {children}
        </form>
      </RHFFormProvider>
    </FormConfigContext.Provider>
  );
}

Form.displayName = "Form";
