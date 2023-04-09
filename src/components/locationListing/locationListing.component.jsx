import React from "react";
import { useState } from "react";
import LocationTag from "./locationTag.component";
import LocationCard from "./locationCard.component";

import { InputText } from "primereact/inputtext";
import locationImage from "../../assets/images/Screenshot from 2023-03-29 20-14-31 1.png";
import { LocationListing } from "src/components";

const tagList = ["Point", "Price", "Most Review"];
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

const LocationListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="flex items-center">
        {tagList.map((tag, index) => {
          return <LocationTag key={index} tag={tag} />;
        })}
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-96"
        />
      </div>
      <div>
        {locationList.map((location, index) => {
          return (
            <LocationCard key={index} location={location} />
          );
        })}
      </div>
    </div>
  );
};

export default LocationListing;
