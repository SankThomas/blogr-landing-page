import React from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = React.useState(navbar)

  return (
    <>
      <nav>
        <div>
          {links.map((link, index) => {
            const { id, title, dropdown } = link
            return (
              <>
                <p key={index}>{title}</p>
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
