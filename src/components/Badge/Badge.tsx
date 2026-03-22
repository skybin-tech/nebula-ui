import { Badge as BadgePrimitive, badgeVariants as badgeVariantsPrimitive } from "../../primitives/badge"
import type { BadgeProps as BadgePrimitiveProps } from "../../primitives/badge"

export type BadgeProps = BadgePrimitiveProps

export function Badge(props: BadgeProps) {
  return <BadgePrimitive {...props} />
}
Badge.displayName = "Badge"

export const badgeVariants = badgeVariantsPrimitive
