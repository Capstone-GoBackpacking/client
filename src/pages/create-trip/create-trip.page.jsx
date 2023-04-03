import { Timeline } from 'primereact/timeline'
import { TbCategory2, TbListDetails } from 'react-icons/tb'
import { HiLocationMarker } from 'react-icons/hi'
import TripTypes from './tripTypes/tripTypes'
import Locations from './locations/locations'
const Element = () => {
  return (
    <div>type</div>
  )
}
const CreateTrip = () => {
  const events = [
    {
      Icon: TbCategory2,
      color: '#F13E3E',
      Element: TripTypes
    },
    {
      Icon: HiLocationMarker,
      color: '#31A436',
      Element: Locations
    },
    {
      Icon: TbListDetails,
      color: '#FBBC05',
      Element: Element
    }
  ]

  const customizedMarker = (item) => {
    return (
      <span className={`flex w-10 h-10 rounded-full items-center justify-center`} style={{ backgroundColor: item.color }}>
        <item.Icon className="text-white" />
      </span>
    )
  }

  const customizedContent = (item) => {
    return (
      <div className="my-5">
        <item.Element />
      </div>
    )
  }

  return (
    <div id="create-trip" className="w-9/12 m-auto">
      <Timeline value={events} marker={customizedMarker} content={customizedContent} />
    </div>
  )
}

export default CreateTrip
