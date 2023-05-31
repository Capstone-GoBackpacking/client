import React, { useState } from "react";
import { LocationCard, Tag } from "src/components";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { GrAddCircle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const LocationListingContainer = ({
  locations,
  tags,
  onSelectTag,
  onChangeName,
}) => {
  const navigate = useNavigate();
  const [nameSearch, setNameSearch] = useState("");

  return (
    <div className="grid grid-cols-1 bg-white">
      <div className="flex gap-x-2">
        <div className="flex flex-2 items-center gap-x-5 overflow-x-auto">
          {tags?.map((tag) => {
            return (
              <Tag
                key={tag.id}
                tag={tag.name}
                onClick={() => onSelectTag(tag.id)}
              />
            );
          })}
        </div>
        <InputText
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          onKeyDown={(e) => onChangeName(e)}
          className="flex-1"
        />
        <Button
          icon={GrAddCircle}
          className="bg-white"
          onClick={() => {
            navigate("/contribute-location");
          }}
        />
      </div>
      <div className="flex items-center gap-x-5 overflow-x-auto py-3">
        {locations.map((location) => {
          return (
            <LocationCard
              key={location.id}
              thumbnail={location.thumbnail}
              address={location.address}
              name={location.name}
              id={location.id}
              lat={location.lat}
              lng={location.lng}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LocationListingContainer;
