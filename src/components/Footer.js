import React from "react"
import Logo from "./Logo"
import { footer } from "../data/footer"

const Footer = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(footer)

  return (
    <>
      <footer className="footer py-20 text-center">
        <div className="mb-10">
          <Logo />
        </div>

        <div>
          {items.map(({ id, title, links }) => {
            return (
              <div key={id}>
                <h4 className="font-bold text-white mt-10 mb-5">{title}</h4>
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link} className="my-2">
                        {link}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </footer>
    </>
  )
}

export default Footer
