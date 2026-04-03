import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Switch as SwitchPrimitive } from "../../primitives/switch"

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive>,
  ComponentPropsWithoutRef<typeof SwitchPrimitive>
>((props, ref) => <SwitchPrimitive ref={ref} {...props} />)
Switch.displayName = "Switch"
