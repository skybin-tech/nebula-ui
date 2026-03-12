// Type declarations for @skybin-tech/nebula-ui
declare module '@skybin-tech/nebula-ui' {
  import * as React from 'react';

  // Button
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
  }
  export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

  // Card
  export const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  export const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  export const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  export const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
  export const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
  export const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

  // Badge
  export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  }
  export const Badge: React.FC<BadgeProps>;

  // Avatar
  export const Avatar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  export const AvatarImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
  export const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

  // Dropdown Menu
  export const DropdownMenu: React.FC<any>;
  export const DropdownMenuTrigger: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuContent: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuItem: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuRadioItem: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuLabel: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuSeparator: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>>;
  export const DropdownMenuGroup: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const DropdownMenuPortal: React.FC<any>;
  export const DropdownMenuSub: React.FC<any>;
  export const DropdownMenuSubContent: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<any>;
  export const DropdownMenuRadioGroup: React.FC<any>;

  // Separator
  export const Separator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

  // Form Components
  export interface FormProps<T = any> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: T) => void | Promise<void>;
    [key: string]: any;
  }
  
  type FormComponent = {
    <T = any>(props: FormProps<T> & React.RefAttributes<HTMLFormElement>): React.ReactElement | null;
  } & React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
  
  export const Form: FormComponent;

  export interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    control?: any; // react-hook-form control
    minValue?: number;
    maxValue?: number;
    email?: boolean;
  }
  export const TextBox: React.ForwardRefExoticComponent<TextBoxProps & React.RefAttributes<HTMLInputElement>>;

  export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
  }
  export const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;

  export interface SelectOption {
    value: string;
    label: string;
  }

  export interface SelectProps {
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
  }
  export const Select: React.FC<SelectProps>;

  export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
  export const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

  export interface RadioOption {
    value: string;
    label: string;
  }

  export interface RadioGroupProps {
    name?: string;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    required?: boolean;
    direction?: 'horizontal' | 'vertical';
  }
  export const RadioGroup: React.FC<RadioGroupProps>;
  export const RadioItem: React.FC<any>;

  export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
  export const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

  // Form Context & Hooks
  export const FormConfigContext: React.Context<any>;
  export const defaultFormConfig: any;
  export function buildZodSchemaFromRules(rules: any): any;
  export function useFieldValidationRegistry(): any;
  export function useFormConfig(): any;
  export function useForm(): any;
  export function useFormField(): any;
  export function useFieldError(): any;

  // Utilities
  export function cn(...classes: any[]): string;
  export const z: any; // Zod
}
