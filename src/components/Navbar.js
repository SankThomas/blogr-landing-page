import React from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = React.useState(navbar)

  return (
    <>
      <nav>
        <div className="md:flex">
          {links.map((link, index) => {
            const { id, title, dropdown } = link
            return (
              <>
                <p key={index} className="py-2 md:p-0 md:mx-2 md:text-white">
                  {title}
                </p>
                <ul>
                  {dropdown.map((drop) => {
                    return (
                      <li key={id} className="hidden">
                        {drop}
                      </li>
                    )
                  })}
                </ul>
              </>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
