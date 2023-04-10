import { LocationListingContainer, MyMap } from "src/containers";
import locationImage from "../../assets/images/Screenshot from 2023-03-29 20-14-31 1.png";
import { useQuery } from "@apollo/client";
import { LOCATIONS } from "src/graphql/locations";
import { Marker } from "react-leaflet";

const Locations = () => {
  const { data: locationData, loading, error } = useQuery(LOCATIONS);

  const locationList = [
    {
      title: "Thắng cảnh thiên nhiên Nhơn Hải",
      location: "Nhon Hai, Binh Dinh, Viet Nam",
      coordinates: "123,123",
      image: locationImage,
      likeNumber: 7,
    },
    {
      title: "Thắng cảnh thiên nhiên Nhơn Hải",
      location: "Nhon Hai, Binh Dinh, Viet Nam",
      coordinates: "123,123",
      image: locationImage,
      likeNumber: 3.1,
    },
    {
      title: "Thắng cảnh thiên nhiên Nhơn Hải",
      location: "Nhon Hai, Binh Dinh, Viet Nam",
      coordinates: "123,123",
      image: locationImage,
      likeNumber: 10,
    },
    {
      title: "Thắng cảnh thiên nhiên Nhơn Hải",
      location: "Nhon Hai, Binh Dinh, Viet Nam",
      coordinates: "123,123",
      image: locationImage,
      likeNumber: 7,
    },
  ];

  const tagList = [
    "Point",
    "Price",
    "Most Review",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];
  console.log(locationData?.locations);

  return (
    <div className="w-11/12 m-auto h-screen flex flex-col">
      <div className="flex-1">
        <MyMap>
          {locationData?.locations &&
            locationData.locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
              ></Marker>
            ))}
        </MyMap>
      </div>
      {locationData?.locations && (
        <LocationListingContainer
          locations={locationData.locations}
          tags={tagList}
        />
      )}
    </div>
  );
};

export default Locations;
