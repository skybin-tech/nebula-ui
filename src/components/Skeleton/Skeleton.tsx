import { Skeleton as SkeletonPrimitive } from "../../primitives/skeleton"
import type { ComponentPropsWithoutRef } from "react"

export type SkeletonProps = ComponentPropsWithoutRef<typeof SkeletonPrimitive>

export function Skeleton(props: SkeletonProps) {
  return <SkeletonPrimitive {...props} />
}
Skeleton.displayName = "Skeleton"
