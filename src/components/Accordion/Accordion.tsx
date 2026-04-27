import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionItemPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
  AccordionContent as AccordionContentPrimitive,
} from "../../primitives/accordion"

export const Accordion = AccordionPrimitive

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionItemPrimitive>,
  ComponentPropsWithoutRef<typeof AccordionItemPrimitive>
>((props, ref) => <AccordionItemPrimitive ref={ref} {...props} />)
AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof AccordionTriggerPrimitive>
>((props, ref) => <AccordionTriggerPrimitive ref={ref} {...props} />)
AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionContentPrimitive>,
  ComponentPropsWithoutRef<typeof AccordionContentPrimitive>
>((props, ref) => <AccordionContentPrimitive ref={ref} {...props} />)
AccordionContent.displayName = "AccordionContent"
