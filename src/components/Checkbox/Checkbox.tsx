'use client';

import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Checkbox as CheckboxPrimitive } from "../../primitives/checkbox"

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive>

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive>,
  CheckboxProps
>((props, ref) => <CheckboxPrimitive ref={ref} {...props} />)
Checkbox.displayName = "Checkbox"
