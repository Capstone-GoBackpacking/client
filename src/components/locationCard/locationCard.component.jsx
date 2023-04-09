import React from "react";
import locationImage from "../../assets/images/Following.png";

const LocationCard = ({ location }) => {
  return (
    <div className="rounded-md shadow-md p-2">
      <div className="flex gap-x-2">
        <img
          className="w-40 h-28"
          src={location.image}
        />
        <div className="flex flex-col w-[400px]">
          <h3>{location.title}</h3>
          <p>{location.location}</p>
          <p>{location.coordinates}</p>
          <div className="flex items-center mt-2 justify-end">
            <img
              className="mr-2"
              src={locationImage}
              alt="likeIcon"
            />
            <span
              className={
                "flex items-center justify-center rounded-full h-6 w-6 text-xs text-white " +
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
    </div>
  );
};

export default LocationCard;
