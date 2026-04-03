import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import {
  Alert as AlertPrimitive,
  AlertTitle as AlertTitlePrimitive,
  AlertDescription as AlertDescriptionPrimitive,
} from "../../primitives/alert"

export const Alert = forwardRef<
  ElementRef<typeof AlertPrimitive>,
  ComponentPropsWithoutRef<typeof AlertPrimitive>
>((props, ref) => <AlertPrimitive ref={ref} {...props} />)
Alert.displayName = "Alert"

export const AlertTitle = forwardRef<
  ElementRef<typeof AlertTitlePrimitive>,
  ComponentPropsWithoutRef<typeof AlertTitlePrimitive>
>((props, ref) => <AlertTitlePrimitive ref={ref} {...props} />)
AlertTitle.displayName = "AlertTitle"

export const AlertDescription = forwardRef<
  ElementRef<typeof AlertDescriptionPrimitive>,
  ComponentPropsWithoutRef<typeof AlertDescriptionPrimitive>
>((props, ref) => <AlertDescriptionPrimitive ref={ref} {...props} />)
AlertDescription.displayName = "AlertDescription"
