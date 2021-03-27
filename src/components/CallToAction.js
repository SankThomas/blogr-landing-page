import React from "react"
import { buttons } from "../data/navbar"

const CallToAction = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(buttons)
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row">
        {items.map((item) => {
          return (
            <button
              key={item.id}
              className="block my-2 md:my-0 md:mx-2 md:text-white"
            >
              {item.title}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default CallToAction
