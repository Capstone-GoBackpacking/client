import React from "react";
import followingImg from "../../assets/images/Following.png";

const LocationCard = ({ location }) => {
  return (
    <div>
      <img src={location.img} />
      <div>
        <h3>{location.title}</h3>
        <span>{location.location}</span>
        <span>{location.coordinates}</span>
        <img src={followingImg} alt="likeIcon" />
        <span>{location.likeNumber}</span>
      </div>
    </div>
  );
};

export default LocationCard;
