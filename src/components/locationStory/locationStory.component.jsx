import React from "react";
import starFilter from "../../assets/images/Star Filled.png";

const LocationStory = ({ thumbnail, name, rating }) => {
  return (
    <div className="flex relative w-[248px] h-[324px] rounded-lg overflow-hidden cursor-pointer">
      <img className="object-cover" src={thumbnail} alt="story-img" />
      <div className="absolute bottom-0 flex justify-between w-full px-3 py-5 bg-[rgba(0,0,0,0.3)] text-white">
        <h3 className="bottom-3 left-3 font-bold">{name}</h3>
        <div className="flex items-center bottom-3 right-3">
          <img className="h-4 w-4 mr-1" src={starFilter} alt="star-icon" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationStory;
