import type { Color } from "@/types"

interface IColorOptions {
  red: string
  indigo: string
  blue: string
  gray: string
  white: string
  black: string
}

const bgFilledColorClass: IColorOptions = {
  red: "bg-red-700 hover:bg-red-800 focus:bg-red-800",
  indigo: "bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800",
  blue: "bg-blue-700 hover:bg-blue-800 focus:bg-blue-800",
  gray: "bg-gray-700 hover:bg-gray-800 focus:bg-gray-800",
  white: "bg-white hover:bg-opacity-90 focus:bg-opacity-80",
  black: "bg-black hover:bg-black/90 focus:bg-black/90"
}
const bgOutlinedColorClass: IColorOptions = {
  red: "border-red-700 hover:bg-red-700 focus:bg-red-700",
  indigo: "border-indigo-700 hover:bg-indigo-700 focus:bg-indigo-700",
  blue: "border-blue-700 hover:bg-blue-700 focus:bg-blue-700",
  gray: "border-gray-700 hover:bg-gray-700 focus:bg-gray-700",
  white: "border-white hover:border-opacity-80 focus:border-opacity-80",
  black: "border-black hover:border-opacity-80 focus:border-opacity-80"
}
const textFilledColorClass: IColorOptions = {
  red: "text-red-700 hover:text-white focus:text-white",
  indigo: "text-indigo-700 hover:text-white focus:text-white",
  blue: "text-blue-700 hover:text-white focus:text-white",
  gray: "text-gray-700 hover:text-white focus:text-white",
  white: "text-white",
  black: "text-black"
}
const textOutlinedColorClass: IColorOptions = {
  red: "text-red-700 hover:text-white focus:text-white",
  indigo: "text-indigo-700 hover:text-white focus:text-white",
  blue: "text-blue-700 hover:text-white focus:text-white",
  gray: "text-gray-700 hover:text-white focus:text-white",
  white: "text-white hover:text-black focus:text-black",
  black: "text-black hover:text-white focus:text-white"
}

interface ButtonVariant {
  filled: string
  outlined: string
}

interface ButtonVariantProps {
  background: Color
  foreground: Color
}

const buttonVariant = ({ background, foreground }: ButtonVariantProps): ButtonVariant => {
  return {
    filled: `${bgFilledColorClass[background]} ${textFilledColorClass[foreground]}`,
    outlined: `border ${bgOutlinedColorClass[background]} ${textOutlinedColorClass[background]}`
  }
}

export { buttonVariant }
