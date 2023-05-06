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
              <GiPathDistance className="inline-block mr-2" />
              {distance} km
            </p>
            <p>
              <BsFillPeopleFill className="inline-block mr-2" />
              {slot}
            </p>
            <p>
              <AiFillCalendar className="inline-block mr-2" />
              {timeStart} - {timeEnd}
            </p>
          </div>
          <div>
            <p className="text-primary font-medium text-center mb-2">{type}</p>
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
            className="w-full h-full"
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
