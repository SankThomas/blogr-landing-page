import React from "react"
import mobileDesignedImage from "../images/illustration-editor-mobile.svg"
import desktopDesignedImage from "../images/illustration-editor-desktop.svg"

const Designed = () => {
  return (
    <>
      <div className="pt-20 px-5">
        <h2 className="text-gray-800 mb-10">Designed for the future</h2>
      </div>
      <section className="pb-20">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopDesignedImage} />
          <img
            src={mobileDesignedImage}
            alt="design illustrator"
            className="block mx-auto"
          />
        </picture>

        <section className="px-5">
          <div className="mt-10">
            <h3>Introducing an extensible header</h3>
            <p className="text-center text-gray-600 leading-8">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div className="mt-10">
            <h3>Robust content management</h3>
            <p className="text-center text-gray-600 leading-8">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}

export default Designed
