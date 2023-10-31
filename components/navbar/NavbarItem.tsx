import type { FC } from "react"

interface NavbarItemProps {
  label: string
  isMobile: boolean
}

const NavbarItem: FC<NavbarItemProps> = ({
  label,
  isMobile
}) => {
  const styles = isMobile ? "px-3 hover:underline" : "cursor-pointer transition hover:text-white/70"
  return (
    <li className={`text-white ${styles}`}>
      {label}
    </li>
  )
}

export default NavbarItem
