import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import {
  Card as CardPrimitive,
  CardHeader as CardHeaderPrimitive,
  CardTitle as CardTitlePrimitive,
  CardDescription as CardDescriptionPrimitive,
  CardContent as CardContentPrimitive,
  CardFooter as CardFooterPrimitive,
} from "../../primitives/card"

export const Card = forwardRef<
  ElementRef<typeof CardPrimitive>,
  ComponentPropsWithoutRef<typeof CardPrimitive>
>((props, ref) => <CardPrimitive ref={ref} {...props} />)
Card.displayName = "Card"

export const CardHeader = forwardRef<
  ElementRef<typeof CardHeaderPrimitive>,
  ComponentPropsWithoutRef<typeof CardHeaderPrimitive>
>((props, ref) => <CardHeaderPrimitive ref={ref} {...props} />)
CardHeader.displayName = "CardHeader"

export const CardTitle = forwardRef<
  ElementRef<typeof CardTitlePrimitive>,
  ComponentPropsWithoutRef<typeof CardTitlePrimitive>
>((props, ref) => <CardTitlePrimitive ref={ref} {...props} />)
CardTitle.displayName = "CardTitle"

export const CardDescription = forwardRef<
  ElementRef<typeof CardDescriptionPrimitive>,
  ComponentPropsWithoutRef<typeof CardDescriptionPrimitive>
>((props, ref) => <CardDescriptionPrimitive ref={ref} {...props} />)
CardDescription.displayName = "CardDescription"

export const CardContent = forwardRef<
  ElementRef<typeof CardContentPrimitive>,
  ComponentPropsWithoutRef<typeof CardContentPrimitive>
>((props, ref) => <CardContentPrimitive ref={ref} {...props} />)
CardContent.displayName = "CardContent"

export const CardFooter = forwardRef<
  ElementRef<typeof CardFooterPrimitive>,
  ComponentPropsWithoutRef<typeof CardFooterPrimitive>
>((props, ref) => <CardFooterPrimitive ref={ref} {...props} />)
CardFooter.displayName = "CardFooter"
