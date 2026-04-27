import {
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
  TooltipContent as TooltipContentPrimitive,
  TooltipProvider as TooltipProviderPrimitive,
} from "../../primitives/tooltip"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

export const TooltipProvider = TooltipProviderPrimitive
export const Tooltip = TooltipPrimitive
export const TooltipTrigger = TooltipTriggerPrimitive

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipContentPrimitive>,
  ComponentPropsWithoutRef<typeof TooltipContentPrimitive>
>((props, ref) => <TooltipContentPrimitive ref={ref} {...props} />)
TooltipContent.displayName = "TooltipContent"

export type TooltipContentProps = ComponentPropsWithoutRef<typeof TooltipContentPrimitive>
