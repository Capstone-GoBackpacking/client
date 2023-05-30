import { MapContainer, Marker, TileLayer, Polyline } from "react-leaflet";
import { Button } from "..";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";

const TripTemplate = ({
  ckey,
  name,
  fromName,
  toName,
  fromPosition,
  toPosition,
  distance,
  type,
  slot,
  timeStart,
  timeEnd,
  onCreate,
}) => {
  return (
    <div className="bg-white shadow-md">
      <div className="p-5">
        <div className="mb-2 flex">
          <div className="flex-1">
            <p className="font-medium">{name}</p>
            <p>From: {fromName}</p>
            <p>To: {toName}</p>
            <p>
              <GiPathDistance className="mr-2 inline-block" />
              {distance} km
            </p>
            <p>
              <BsFillPeopleFill className="mr-2 inline-block" />
              {slot}
            </p>
            <p>
              <AiFillCalendar className="mr-2 inline-block" />
              {new Date(Number(timeStart)).toLocaleTimeString()} -{" "}
              {new Date(Number(timeEnd)).toLocaleTimeString()}
            </p>
          </div>
          <div>
            <p className="mb-2 text-center font-medium text-primary">{type}</p>
            <Button
              type="primary"
              name="Create"
              className="px-4 py-2"
              onClick={() => onCreate(ckey)}
            />
          </div>
        </div>
        <div className="h-64">
          <MapContainer
            center={[16.075319, 108.156435]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline
              positions={[
                [fromPosition.lat, fromPosition.lng],
                [toPosition.lat, toPosition.lng],
              ]}
            />
            <Marker position={fromPosition}></Marker>
            <Marker position={toPosition}></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default TripTemplate;
