import { MapContainer, TileLayer } from "react-leaflet"

const MyMap = ({ children }) => {
  return (
    <MapContainer
      center={[16.075319, 108.156435]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-96"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}

export default MyMap
