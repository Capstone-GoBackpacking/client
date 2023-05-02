import { InputNumber } from "primereact/inputnumber";
import { MyMap } from "src/containers";
import { useQuery } from "@apollo/client";
import { TRIPTYPES } from "src/graphql/trip-types";
import TripType from "src/components/tripType/tripType.component";
import { useState } from "react";
import { Button } from "src/components";
import { LOCATIONS } from "src/graphql/locations";
import { Marker } from "react-leaflet";

const GenerateTrip = () => {
  const { data, loading, error } = useQuery(TRIPTYPES);
  const { data: locationData } = useQuery(LOCATIONS);
  const [generateInput, setGenerateInput] = useState({
    type: "",
    distance: 0,
  });

  const onSelected = (id) => {
    setGenerateInput((state) => ({ ...state, type: id }));
  };

  return (
    <div className="w-11/12 m-auto flex py-10">
      <div className="flex-1">
        <div className="w-11/12 m-auto">
          <div className="mt-5">
            <label className="font-medium">Current Location</label>
            <div className="h-80 mt-4">
              <MyMap>
                {locationData &&
                  locationData.locations.map((location) => (
                    <Marker
                      key={location.id}
                      position={{ lat: location.lat, lng: location.lng }}
                    />
                  ))}
              </MyMap>
            </div>
          </div>
          <div className="mt-5">
            <label className="block mb-4 font-medium">Distance</label>
            <InputNumber className="w-full" />
          </div>
          <div className="mt-5">
            <label className="font-medium">Type Of Trip</label>
            <div className="grid grid-cols-2 gap-10 mt-4">
              {data?.types &&
                data.types.map((item) => (
                  <TripType
                    className="text-xs"
                    key={item.id}
                    id={item.id}
                    selected={generateInput.type === item.id}
                    onSelected={onSelected}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Button type="primary" name="Generate" className="px-10 py-2" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-11/12 m-auto">2</div>
      </div>
    </div>
  );
};

export default GenerateTrip;
