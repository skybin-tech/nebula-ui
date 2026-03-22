import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import {
  Avatar as AvatarPrimitive,
  AvatarImage as AvatarImagePrimitive,
  AvatarFallback as AvatarFallbackPrimitive,
} from "../../primitives/avatar"

export const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive>
>((props, ref) => <AvatarPrimitive ref={ref} {...props} />)
Avatar.displayName = "Avatar"

export const AvatarImage = forwardRef<
  ElementRef<typeof AvatarImagePrimitive>,
  ComponentPropsWithoutRef<typeof AvatarImagePrimitive>
>((props, ref) => <AvatarImagePrimitive ref={ref} {...props} />)
AvatarImage.displayName = "AvatarImage"

export const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarFallbackPrimitive>,
  ComponentPropsWithoutRef<typeof AvatarFallbackPrimitive>
>((props, ref) => <AvatarFallbackPrimitive ref={ref} {...props} />)
AvatarFallback.displayName = "AvatarFallback"
