import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react"
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuTrigger as DropdownMenuTriggerPrimitive,
  DropdownMenuContent as DropdownMenuContentPrimitive,
  DropdownMenuItem as DropdownMenuItemPrimitive,
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemPrimitive,
  DropdownMenuRadioItem as DropdownMenuRadioItemPrimitive,
  DropdownMenuLabel as DropdownMenuLabelPrimitive,
  DropdownMenuSeparator as DropdownMenuSeparatorPrimitive,
  DropdownMenuShortcut as DropdownMenuShortcutPrimitive,
  DropdownMenuGroup as DropdownMenuGroupPrimitive,
  DropdownMenuPortal as DropdownMenuPortalPrimitive,
  DropdownMenuSub as DropdownMenuSubPrimitive,
  DropdownMenuSubContent as DropdownMenuSubContentPrimitive,
  DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive,
  DropdownMenuRadioGroup as DropdownMenuRadioGroupPrimitive,
} from "../../primitives/dropdown-menu"

// Root / context-only components (no DOM element to ref)
export function DropdownMenu(props: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive>) {
  return <DropdownMenuPrimitive {...props} />
}

export function DropdownMenuPortal(props: ComponentPropsWithoutRef<typeof DropdownMenuPortalPrimitive>) {
  return <DropdownMenuPortalPrimitive {...props} />
}

export function DropdownMenuSub(props: ComponentPropsWithoutRef<typeof DropdownMenuSubPrimitive>) {
  return <DropdownMenuSubPrimitive {...props} />
}

// DOM-rendering components (forwardRef)
export const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuTriggerPrimitive>
>((props, ref) => <DropdownMenuTriggerPrimitive ref={ref} {...props} />)
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

export const DropdownMenuGroup = forwardRef<
  ElementRef<typeof DropdownMenuGroupPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuGroupPrimitive>
>((props, ref) => <DropdownMenuGroupPrimitive ref={ref} {...props} />)
DropdownMenuGroup.displayName = "DropdownMenuGroup"

export const DropdownMenuRadioGroup = forwardRef<
  ElementRef<typeof DropdownMenuRadioGroupPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadioGroupPrimitive>
>((props, ref) => <DropdownMenuRadioGroupPrimitive ref={ref} {...props} />)
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuContentPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuContentPrimitive>
>((props, ref) => <DropdownMenuContentPrimitive ref={ref} {...props} />)
DropdownMenuContent.displayName = "DropdownMenuContent"

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof DropdownMenuSubContentPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuSubContentPrimitive>
>((props, ref) => <DropdownMenuSubContentPrimitive ref={ref} {...props} />)
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuSubTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerPrimitive>
>((props, ref) => <DropdownMenuSubTriggerPrimitive ref={ref} {...props} />)
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuItemPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuItemPrimitive>
>((props, ref) => <DropdownMenuItemPrimitive ref={ref} {...props} />)
DropdownMenuItem.displayName = "DropdownMenuItem"

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuCheckboxItemPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemPrimitive>
>((props, ref) => <DropdownMenuCheckboxItemPrimitive ref={ref} {...props} />)
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuRadioItemPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadioItemPrimitive>
>((props, ref) => <DropdownMenuRadioItemPrimitive ref={ref} {...props} />)
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuLabelPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuLabelPrimitive>
>((props, ref) => <DropdownMenuLabelPrimitive ref={ref} {...props} />)
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuSeparatorPrimitive>,
  ComponentPropsWithoutRef<typeof DropdownMenuSeparatorPrimitive>
>((props, ref) => <DropdownMenuSeparatorPrimitive ref={ref} {...props} />)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

// Utility span — no ref needed
export function DropdownMenuShortcut(props: HTMLAttributes<HTMLSpanElement>) {
  return <DropdownMenuShortcutPrimitive {...props} />
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
