import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { MyMap } from "src/containers";
import { Marker, Popup } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import createTripSelector from "src/redux/reducers/create-trip/create-trip.selector";
import { setValue } from "src/redux/reducers/create-trip/create-trip.reducer";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { LOCATIONS } from "src/graphql/locations";

const Locations = () => {
  const { data: locationsData } = useQuery(LOCATIONS);
  const [locationName, setLocationName] = useState({
    from: "",
    to: "",
  });
  const { from, to, start, end } = useSelector(createTripSelector);
  const dispatch = useDispatch();

  const removeSelect = (key) => {
    dispatch(setValue({ key, value: "" }));
    setLocationName({ ...locationName, [key]: "" });
  };

  const handleSetValue = (key, value) => {
    dispatch(setValue({ key, value }));
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="flex-1">
            <label htmlFor="from-location" className="font-bold">
              From
            </label>
            <InputText
              id="from-location"
              className="w-full"
              value={locationName.from}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="to-location" className="font-bold">
              To
            </label>
            <InputText
              id="to-location"
              className="w-full"
              value={locationName.to}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="flex-1">
            <label htmlFor="start-time" className="font-bold">
              Start
            </label>
            <Calendar
              id="start-time"
              showIcon
              showTime
              hourFormat="24"
              className="w-full"
              value={start}
              onChange={(e) => handleSetValue("start", e.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="end-time" className="font-bold">
              End
            </label>
            <Calendar
              id="end-time"
              showIcon
              showTime
              hourFormat="24"
              className="w-full"
              value={end}
              onChange={(e) => handleSetValue("end", e.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-5">
        <div className="h-96">
          <MyMap>
            {locationsData &&
              locationsData.locations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                  eventHandlers={{
                    click: () => {
                      if (location.id !== from && location.id !== to) {
                        if (!from) {
                          handleSetValue("from", location.id);
                          setLocationName({
                            ...locationName,
                            from: location.name,
                          });
                        }
                        if (from && !to) {
                          handleSetValue("to", location.id);
                          setLocationName({
                            ...locationName,
                            to: location.name,
                          });
                        }
                      }
                    },
                  }}
                >
                  <Popup>
                    <p>{location.name}</p>
                    {from === location.id && (
                      <button onClick={() => removeSelect("from")}>
                        Remove From
                      </button>
                    )}
                    {to === location.id && (
                      <button onClick={() => removeSelect("to")}>
                        Remove To
                      </button>
                    )}
                  </Popup>
                </Marker>
              ))}
          </MyMap>
        </div>
      </div>
    </div>
  );
};

export default Locations;
