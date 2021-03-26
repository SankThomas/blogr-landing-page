import React from "react"
import Buttons from "./Buttons"
// eslint-disable-next-line
import hero from "../images/bg-pattern-intro.svg"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay py-44 px-5 text-center">
          <h1 className="font-bold text-4xl text-white mb-2">
            A modern publishing platform
          </h1>
          <p className="text-white mb-5">
            Grow your audience and build your online brand
          </p>
          <Buttons />
        </div>
      </section>
    </>
  )
}

export default Showcase
