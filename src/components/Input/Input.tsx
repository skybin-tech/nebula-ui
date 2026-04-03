import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Input as InputPrimitive } from "../../primitives/input"

export type InputProps = ComponentPropsWithoutRef<typeof InputPrimitive>

export const Input = forwardRef<
  ElementRef<typeof InputPrimitive>,
  InputProps
>((props, ref) => <InputPrimitive ref={ref} {...props} />)
Input.displayName = "Input"
