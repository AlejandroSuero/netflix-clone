import type { FC, HTMLProps, MouseEventHandler, ReactNode } from "react"

import type { Color, Variant } from "@/types"
import { buttonVariant } from "@/libs/constants"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  handleClick: MouseEventHandler<HTMLButtonElement>
  variant: Variant
  text?: string
  foreground: Color
  background: Color
  customStyles?: string
  type?: "submit" | "reset" | "button"
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({
  handleClick,
  variant = "filled",
  text,
  customStyles,
  type,
  background,
  foreground,
  children
}) => {
  const variantStyle = buttonVariant({ background, foreground })
  const className = customStyles ? `${variantStyle[variant]} ${customStyles}` : variantStyle[variant]

  return (
    <button
      className={className}
      onClick={handleClick}
      type={type}
    >
      {children ?? text}
    </button>
  )
}

export default Button
