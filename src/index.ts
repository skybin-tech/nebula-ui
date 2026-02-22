// Components
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

// shadcn/ui Primitives (DO NOT MODIFY - for upgrades)
export {
  Input as ShadcnInput,
  Label as ShadcnLabel,
  Checkbox as ShadcnCheckbox,
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem as ShadcnRadioGroupItem,
  Switch as ShadcnSwitch,
  Select as ShadcnSelect,
  SelectGroup as ShadcnSelectGroup,
  SelectValue as ShadcnSelectValue,
  SelectTrigger as ShadcnSelectTrigger,
  SelectContent as ShadcnSelectContent,
  SelectLabel as ShadcnSelectLabel,
  SelectItem as ShadcnSelectItem,
  SelectSeparator as ShadcnSelectSeparator,
  Textarea as ShadcnTextarea,
} from "./components/ui";

// Form Components (Wrappers around shadcn/ui primitives)
export {
  Form,
  TextBox,
  TextArea,
  Select,
  Checkbox,
  RadioGroup,
  RadioItem,
  Switch,
  FormConfigContext,
  defaultFormConfig,
  buildZodSchemaFromRules,
  useFieldValidationRegistry,
  useFormConfig,
  useForm,
  useFormField,
  useFieldError,
} from "./components/Form";

export type {
  FormProps,
  TextBoxProps,
  TextAreaProps,
  SelectProps,
  SelectOption,
  CheckboxProps,
  RadioGroupProps,
  RadioItemProps,
  RadioOption,
  SwitchProps,
  FormConfig,
  FormContextValue,
  FieldValidationRules,
  FieldRegistration,
} from "./components/Form";

// Hooks
export { useToggle } from "./hooks/useToggle";
export { useDebounce } from "./hooks/useDebounce";

// Utils
export { cn } from "./utils/cn";

// Re-export zod for convenience
export { z } from "zod";
export type { ZodType } from "zod";
