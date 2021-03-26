import React from "react"
import { buttons } from "../data/navbar"

const CallToAction = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(buttons)
  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <button key={item.id} className="block">
              {item.title}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default CallToAction
