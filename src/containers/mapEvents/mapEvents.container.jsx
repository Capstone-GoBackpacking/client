import { useMapEvents } from "react-leaflet"

const MyMarker = ({ setCoordinates }) => {
  useMapEvents({
    click: (e) => setCoordinates(e.latlng.lat, e.latlng.lng)
  })

  return null
}

export default MyMarker
