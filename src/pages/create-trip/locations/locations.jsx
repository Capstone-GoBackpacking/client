import { InputText } from "primereact/inputtext"
import { Calendar } from "primereact/calendar"
import { MyMap } from "src/containers"
import { useState } from "react"
import { Marker } from "react-leaflet"
import { MapEvents } from "src/containers"

const Locations = () => {
  const [coordinates, setCoordinates] = useState([])

  const handleAddCoordinates = (lat, lng) => {
    if (coordinates.length < 2) {
      setCoordinates(state => [...state, [lat, lng]])
    }
  }

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="flex-1">
            <label htmlFor="from-location" className="font-bold">From</label>
            <InputText id="from-location" className="w-full" />
          </div>
          <div className="flex-1">
            <label htmlFor="to-location" className="font-bold">To</label>
            <InputText id="to-location" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="flex-1">
            <label htmlFor="start-time" className="font-bold">Start</label>
            <Calendar id="start-time" showIcon showTime hourFormat="24" className="w-full" />
          </div>
          <div className="flex-1">
            <label htmlFor="end-time" className="font-bold">End</label>
            <Calendar id="end-time" showIcon showTime hourFormat="24" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-5">
        <MyMap>
          <MapEvents setCoordinates={handleAddCoordinates} />
          {coordinates.map(coordinate => <Marker position={coordinate} />)}
        </MyMap>
      </div>
    </div>
  )
}

export default Locations
