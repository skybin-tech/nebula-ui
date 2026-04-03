// ─── Button ─────────────────────────────────────────────────────────────────
export { Button, buttonVariants } from "./components/Button"
export type { ButtonProps } from "./components/Button"

// ─── Form + Field Wrappers ───────────────────────────────────────────────────
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
} from "./components/Form"

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
} from "./components/Form"

// ─── Display Components ──────────────────────────────────────────────────────
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/Card"

export { Badge, badgeVariants } from "./components/Badge"
export type { BadgeProps } from "./components/Badge"

export { Avatar, AvatarImage, AvatarFallback } from "./components/Avatar"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/DropdownMenu"

export { Separator } from "./components/Separator"

// ─── Feedback / Layout ───────────────────────────────────────────────────────
export { Alert, AlertTitle, AlertDescription } from "./components/Alert"
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs"

// ─── Form Primitives (standalone) ────────────────────────────────────────────
export { Input } from "./components/Input"
export type { InputProps } from "./components/Input"

export { Label } from "./components/Label"
export type { LabelProps } from "./components/Label"

export { Textarea } from "./components/Textarea"
export type { TextareaProps } from "./components/Textarea"

// ─── Hooks ───────────────────────────────────────────────────────────────────
export { useToggle } from "./hooks/useToggle"
export { useDebounce } from "./hooks/useDebounce"

// ─── Utils ───────────────────────────────────────────────────────────────────
export { cn } from "./utils/cn"
