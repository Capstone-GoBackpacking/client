import React from "react"

const Hobby = ({ id, name, checked, onCheck }) => {
  return (
    <div
      onClick={() => onCheck(id)}
      className={`cursor-pointer hover:scale-110 ease-linear duration-500 hover:opacity-95 border-2 border-primary min-w-min h-12 mx-4 my-2 flex justify-center items-center px-10 py-3 rounded-full
        ${checked
          ? "bg-primary text-white"
          : "bg-white text-primary"
        }
      `}
    >
      {name}
    </div>
  )
}

export default Hobby
