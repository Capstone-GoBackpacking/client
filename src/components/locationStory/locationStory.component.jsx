import React from "react";
import startFilter from "../../assets/images/Star Filled.png";

const LocationStory = ({ thumbnail, to, slot }) => {
  return (
    <div className="flex relative w-[248px] h-[324px] rounded-lg overflow-hidden cursor-pointer">
      <img
        className="object-cover"
        src={
          "https://primefaces.org/cdn/primereact/images/usercard.png"
        }
        alt="story-img"
      />
      <h3 className="absolute bottom-3 left-3">{to}</h3>
      <div className="flex items-center absolute bottom-3 right-3">
        <img
          className="h-4 w-4 mr-1"
          src={startFilter}
          alt="star-icon"
        />
        <span>{slot}</span>
      </div>
    </div>
  );
};

export default LocationStory;
