import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import CallToAction from "./CallToAction"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

const Header = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <header className="flex items-center justify-between p-5 absolute w-full z-50">
        <div>
          <Logo />
        </div>

        {open && (
          <nav>
            <Navbar />
            <CallToAction />
          </nav>
        )}

        <div>
          {open ? (
            <button onClick={() => setOpen(false)} className="cursor-pointer">
              <img src={close} alt="close" />
            </button>
          ) : (
            <button onClick={() => setOpen(true)} className="cursor-pointer">
              <img src={menu} alt="open menu" />
            </button>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
