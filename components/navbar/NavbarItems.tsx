import type { FC } from "react"

import { NavbarItem } from "@/components"

interface NavbarItemsProps {
  items: string[]
  mobile: boolean
}

const NavbarItems: FC<NavbarItemsProps> = ({
  items,
  mobile
}) => {
  if (!mobile) {
    return (
      <ul className="flex-row ml-8 gap-7 hidden lg:flex">
        {items.map((item: string) => (
          <NavbarItem
            isMobile={mobile}
            label={item}
            key={`item-${item.toLocaleLowerCase()}`}
          />
        ))}
      </ul>
    )
  }
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item: string) => (
        <NavbarItem
          isMobile={mobile}
          label={item}
          key={`mobile-item-${item.toLocaleLowerCase()}`}
        />
      ))}
    </ul>
  )
}

export default NavbarItems
