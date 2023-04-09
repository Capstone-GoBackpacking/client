import { LocationListingContainer } from "src/containers";
import locationImage from "../../assets/images/Screenshot from 2023-03-29 20-14-31 1.png";

const Locations = () => {
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

  const tagList = ["Point", "Price", "Most Review", "test", "test", "test", "test", "test", "test", "test"];

  return (
    <div className="w-11/12 m-auto">
      <LocationListingContainer locations={locationList} tags={tagList}/>
    </div>
  );
};

export default Locations;
