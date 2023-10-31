import type { FC } from "react"

import { NavbarItems } from "@/components"

interface MobileMenuProps {
  visible?: boolean
  items: string[]
}

const MobileMenu: FC<MobileMenuProps> = ({
  visible,
  items
}) => {
  if (!visible) return null
  return (
    <div className="bg-black w-56 py-5 px-2 absolute top-8 left-0 flex flex-col border-2 border-white/20 rounded-md">
      <NavbarItems mobile={visible} items={items} />
    </div>
  )
}

export default MobileMenu
