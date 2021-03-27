import React from "react"
import freeMobileImage from "../images/illustration-laptop-mobile.svg"
import freeDesktopImage from "../images/illustration-laptop-desktop.svg"

const Free = () => {
  return (
    <>
      <section className="px-5 pb-20 md:grid md:grid-cols-2 xl:max-w-7xl xl:mx-auto">
        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={freeDesktopImage} />
            <img src={freeMobileImage} alt="laptop" />
          </picture>
        </div>

        <section>
          <div className="mt-10 text-center">
            <h3 className="md:text-left">Free, open, simple</h3>
            <p className="leading-8 text-gray-600 md:text-left">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean as is relatively easy to
              learn.
            </p>
          </div>
          <div className="mt-10 text-center">
            <h3 className="md:text-left">Powerful tooling</h3>
            <p className="leading-8 text-gray-600 md:text-left">
              Batteries included. We built a simple and straightforward CLI
              tools that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}

export default Free
