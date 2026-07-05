import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import type * as SwitchPrimitives from "@radix-ui/react-switch"
import { Switch as SwitchPrimitive } from "../../primitives/switch"

export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive>,
  SwitchProps
>((props, ref) => <SwitchPrimitive ref={ref} {...props} />)
Switch.displayName = "Switch"
