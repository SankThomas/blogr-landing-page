import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import CallToAction from "./CallToAction"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

const Header = () => {
  const [open, setOpen] = React.useState(false)
  // eslint-disable-next-line
  const [width, setWidth] = React.useState(768)

  React.useEffect(() => {
    if (window.innerWidth >= width) {
      setOpen(true)
    }
  }, [width])

  return (
    <div className="relative">
      <header className="flex items-center justify-between p-5 absolute w-full z-50 xl:px-44">
        <div>
          <Logo />
        </div>

        {open && (
          <nav className="absolute top-20 bg-white w-11/12 p-5 text-center shadow-2xl md:bg-transparent md:shadow-none md:p-0 md:top-0 md:relative md:w-auto md:flex">
            <Navbar />
            <CallToAction />
          </nav>
        )}

        <div className="md:hidden">
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
    </div>
  )
}

export default Header
