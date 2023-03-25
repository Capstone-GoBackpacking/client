import React, { useState } from "react"
import Hobby from "./Hobby.component"

const hobbies = [
  "Hiking",
  "Traveling",
  "Backpacking",
  "Mountaineering",
  "Rock Climbing",
  "Cities",
  "National Parks",
  "Camping",
  "Technology",
  "Music",
]

const Hobbies = () => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex flex-col items-center">
        <h2>Add Your Interests</h2>
        <span>Please select at least one</span>
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mb-10"></div>
      <div className="flex flex-wrap w-3/4">
        {hobbies.map((hobby) => (
          <Hobby
            hobby={hobby}
            checked={checked}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mt-10"></div>
      <div className="">
        <div className="absolute right-60 float-right flex mt-10 px-5 py-4 bg-[#6c63ff] justify-center items-center rounded-full w-48 text-white">
          Next
        </div>
      </div>
    </div>
  )
}

export default Hobbies
