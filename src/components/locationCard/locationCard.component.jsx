import React from "react";
import { useNavigate } from "react-router-dom";
import locationImage from "src/assets/images/Following.png";

const LocationCard = ({ thumbnail, address, name, id, lat, lng }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-md shadow-md p-2 cursor-pointer"
      onClick={() => navigate(`/locations/${id}`)}
    >
      <div className="flex gap-x-2">
        <img className="w-40 h-28" src={thumbnail} />
        <div className="flex flex-col w-[400px]">
          <h3>{name}</h3>
          <p>{address}</p>
          <p>
            {lat}, {lng}
          </p>
          <div className="flex items-center mt-2 justify-end">
            <img className="mr-2" src={locationImage} alt="likeIcon" />
            {/* <span
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
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
