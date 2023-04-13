import React from "react";

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
      <span className="absolute bottom-3 right-3">
        {slot}
      </span>
    </div>
  );
};

export default LocationStory;
