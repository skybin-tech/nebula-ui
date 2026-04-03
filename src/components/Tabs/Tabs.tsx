import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
} from "../../primitives/tabs"

export const Tabs = forwardRef<
  ElementRef<typeof TabsPrimitive>,
  ComponentPropsWithoutRef<typeof TabsPrimitive>
>((props, ref) => <TabsPrimitive ref={ref} {...props} />)
Tabs.displayName = "Tabs"

export const TabsList = forwardRef<
  ElementRef<typeof TabsListPrimitive>,
  ComponentPropsWithoutRef<typeof TabsListPrimitive>
>((props, ref) => <TabsListPrimitive ref={ref} {...props} />)
TabsList.displayName = "TabsList"

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsTriggerPrimitive>,
  ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>
>((props, ref) => <TabsTriggerPrimitive ref={ref} {...props} />)
TabsTrigger.displayName = "TabsTrigger"

export const TabsContent = forwardRef<
  ElementRef<typeof TabsContentPrimitive>,
  ComponentPropsWithoutRef<typeof TabsContentPrimitive>
>((props, ref) => <TabsContentPrimitive ref={ref} {...props} />)
TabsContent.displayName = "TabsContent"
