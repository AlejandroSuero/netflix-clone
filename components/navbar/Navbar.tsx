import { useCallback, useState, type FC } from "react"

import { MobileMenu, DesktopMenu } from "@/components"
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs"

const items = ["Home", "Series", "Films", "New & Popular", "My List", "Browse by languages"]

const Navbar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => { return !current })
  }, [])

  return (
    <nav className="w-full fixed z-40">
      <div
        className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900/90"
      >
        <img
          src="/images/logo.png"
          alt="Netflix logo"
          className="h-4 md:h-7 lg:h-10"
        />
        <DesktopMenu items={items} isMobile={false} />
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} items={items} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-white/90 hover:text-white/75 cursor-pointer transition">
            <BsSearch title="Search" />
          </div>
          <div className="text-white/90 hover:text-white/75 cursor-pointer transition">
            <BsBell title="Notifications" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
