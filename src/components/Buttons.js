import React from "react"

const Buttons = () => {
  return (
    <div className="flex items-center justify-evenly">
      <div>
        <button className="bg-white border-2 border-white pt-3 pb-2 px-4 rounded-full text-red-500 font-bold">
          Start for Free
        </button>
      </div>
      <div>
        <button className="border border-white pt-3 pb-2 px-4 rounded-full text-white font-bold">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Buttons
