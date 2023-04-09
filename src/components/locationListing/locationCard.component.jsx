import React from "react";
import locationImage from "../../assets/images/Following.png";

const LocationCard = ({ location }) => {
  return (
    <div className="flex border-solid border-[1px] border-black rounded p-2 mr-2 shadow-xl">
      <img
        className="w-[166px] h-[120px] mr-2"
        src={location.image}
      />
      <div className="flex flex-col min-w-max">
        <h3>{location.title}</h3>
        <span>{location.location}</span>
        <span>{location.coordinates}</span>
        <div className="flex items-center mt-2 justify-end">
          <img
            className="mr-2"
            src={locationImage}
            alt="likeIcon"
          />
          <span
            className={
              "flex items-center justify-center rounded-full h-[24px] w-[24px] text-xs text-white " +
              (location.likeNumber >= 10
                ? " bg-[#71FF76] "
                : location.likeNumber >= 7
                ? " bg-[#E2ED65] "
                : " bg-[#FF7070] ")
            }
          >
            {location.likeNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
