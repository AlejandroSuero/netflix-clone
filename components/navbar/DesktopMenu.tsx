import type { FC } from "react"

import { NavbarItems } from "@/components"

interface DesktopMenuProps {
  items: string[]
  isMobile: boolean
}

const DesktopMenu: FC<DesktopMenuProps> = ({
  items,
  isMobile
}) => {
  if (isMobile) return null
  return (
    <NavbarItems items={items} mobile={isMobile} />
  )
}

export default DesktopMenu
