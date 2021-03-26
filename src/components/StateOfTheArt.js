import React from "react"
import phonesImage from "../images/illustration-phones.svg"
import circles from "../images/bg-pattern-circles.svg"

const StateOfTheArt = () => {
  return (
    <>
      <section className="state relative mt-40 mb-20">
        <div>
          <img
            src={phonesImage}
            alt="phones"
            className="absolute -top-48 w-full z-50"
          />
          <img
            src={circles}
            alt="cirlces pattern"
            className="absolute w-full -top-20"
          />
        </div>
        <div className="pt-72 pb-16 px-5 text-center text-white">
          <h2 className="text-white mt-10">State of the Art Insrastructure</h2>
          <p className="leading-8">
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
