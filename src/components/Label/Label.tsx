import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Label as LabelPrimitive } from "../../primitives/label"

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive>

export const Label = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  LabelProps
>((props, ref) => <LabelPrimitive ref={ref} {...props} />)
Label.displayName = "Label"
