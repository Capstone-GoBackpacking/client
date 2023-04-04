import { Timeline } from 'primereact/timeline'
import { TbCategory2, TbListDetails } from 'react-icons/tb'
import { HiLocationMarker } from 'react-icons/hi'
import TripTypes from './tripTypes/tripTypes'
import Locations from './locations/locations'
import Description from './description/description'
import { Button } from 'src/components'
import { useSelector } from 'react-redux'
import createTripSelector from 'src/redux/reducers/create-trip/create-trip.selector'

const CreateTrip = () => {
  const createTripData = useSelector(createTripSelector)

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
      Element: Description
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

  const handleSubmitCreateTrip = () => {
    console.log(createTripData)
  }

  return (
    <div className='my-10 w-9/12 m-auto'>
      <div id="create-trip" className="">
        <Timeline value={events} marker={customizedMarker} content={customizedContent} />
      </div>
      <div className='pb-10'>
        <Button type="primary" name="Create trip" className="px-4 py-2 float-right" onClick={handleSubmitCreateTrip}/>
      </div>
    </div>
  )
}

export default CreateTrip
