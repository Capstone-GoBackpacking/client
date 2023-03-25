import React from "react"

const Hobby = ({ hobby, checked }) => {
  return (
    <div
      className={`hover:cursor-pointer hover:opacity-95 min-w-min h-12 mx-4 my-2 flex justify-center items-center px-10 py-3 rounded-full
        ${
          checked
            ? "bg-white text-[#6C63FF]"
            : "bg-[#6C63FF] text-white"
        }
      `}
    >
      {hobby}
    </div>
  )
}

export default Hobby
