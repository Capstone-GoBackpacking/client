import { useState } from "react"
import { Hobby } from '../../components'

const HobbiesContainer = () => {
  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter(check => check !== id))
    } else {
      setChecked(state => [...state, id])
    }
  }

  const hobbies = [
    {
      id: '1',
      name: "Hiking"
    },
    {
      id: '2',
      name: 'Traveling'
    },
    {
      id: '3',
      name: 'Backpacking'
    },
    {
      id: '4',
      name: 'Mountaineering'
    },
    {
      id: '5',
      name: 'Rock Climbing'
    },
    {
      id: '6',
      name: 'Cities'
    },
    {
      id: '7',
      name: 'Camping'
    }
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="font-bold text-3xl">Add Your Interests</h2>
        <span className="text-stone-500">Please select at least one</span>
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mb-10"></div>
      <div className="flex flex-wrap w-3/4">
        {hobbies.map((hobby) => (
          <Hobby
            key={hobby.id}
            id={hobby.id}
            name={hobby.name}
            checked={checked.includes(hobby.id)}
            onCheck={handleCheck}
          />
        ))}
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mt-10"></div>
      <div>
        <div className="cursor-pointer absolute right-60 float-right flex mt-10 px-5 py-4 bg-primary justify-center items-center rounded-full w-48 text-white">
          Next
        </div>
      </div>
    </div>
  )
}

export default HobbiesContainer
