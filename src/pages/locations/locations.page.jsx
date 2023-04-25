import { LocationListingContainer, MyMap } from "src/containers";
import { useQuery } from "@apollo/client";
import { LOCATIONS } from "src/graphql/locations";
import { Marker } from "react-leaflet";

const Locations = () => {
  const { data: locationData, loading, error } = useQuery(LOCATIONS);

  const tagList = ["Point", "Price", "Most Review", "test", "test", "test", "test", "test", "test", "test"];

  return (
    <div className="w-11/12 m-auto h-screen flex flex-col">
      <div className="flex-1">
        <MyMap>
          {locationData?.locations &&
            locationData.locations.map((location) => (
              <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }}></Marker>
            ))}
        </MyMap>
      </div>
      {locationData?.locations && <LocationListingContainer locations={locationData.locations} tags={tagList} />}
    </div>
  );
};

export default Locations;
