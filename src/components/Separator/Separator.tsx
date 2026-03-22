import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Separator as SeparatorPrimitive } from "../../primitives/separator"

export const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive>
>((props, ref) => <SeparatorPrimitive ref={ref} {...props} />)
Separator.displayName = "Separator"
