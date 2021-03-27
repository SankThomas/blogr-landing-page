import React from "react"
import logo from "../images/logo.svg"
import { footer } from "../data/footer"

const Footer = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(footer)

  return (
    <>
      {/* Probably changed the design of the footer. I think it looks great */}
      <footer className="footer py-20 text-center">
        <div className="mb-10 md:mb-0">
          <img src={logo} alt="" className="block mx-auto" />
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
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
