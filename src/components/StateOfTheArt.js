import React from "react"
import phonesImage from "../images/illustration-phones.svg"
import circles from "../images/bg-pattern-circles.svg"

const StateOfTheArt = () => {
  return (
    <>
      <section className="state relative mt-40 mb-20 md:grid md:grid-cols-2 md:py-40">
        <div>
          <img
            src={phonesImage}
            alt="phones"
            className="absolute -top-48 z-50 md:-top-20 md:left-0 xl:left-40 xl:-top-40"
          />
          <img
            src={circles}
            alt="cirlces pattern"
            className="absolute -top-40 sm:hidden"
          />
        </div>
        <div className="pt-72 pb-16 px-5 text-center text-white md:p-0 xl:max-w-xl">
          <h3 className="text-white mt-10 md:text-left">
            State of the Art Infrastructure
          </h3>
          <p className="leading-8 md:text-left">
            With reliability and speed in mind, worldwide data centers provivde
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  )
}

export default StateOfTheArt
