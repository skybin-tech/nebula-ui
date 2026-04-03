import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Textarea as TextareaPrimitive } from "../../primitives/textarea"

export type TextareaProps = ComponentPropsWithoutRef<typeof TextareaPrimitive>

export const Textarea = forwardRef<
  ElementRef<typeof TextareaPrimitive>,
  TextareaProps
>((props, ref) => <TextareaPrimitive ref={ref} {...props} />)
Textarea.displayName = "Textarea"
