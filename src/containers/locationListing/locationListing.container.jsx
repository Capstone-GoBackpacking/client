import React, { useState } from "react";
import { LocationCard, Tag } from "src/components";
import { InputText } from "primereact/inputtext";

const LocationListingContainer = ({
  locations,
  tags,
  onSelectTag,
  onChangeName,
}) => {
  const [nameSearch, setNameSearch] = useState("");
  return (
    <div className="grid grid-cols-1">
      <div className="flex gap-x-2">
        <div className="overflow-x-auto flex items-center gap-x-5 flex-2">
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
      </div>
      <div className="overflow-x-auto flex items-center gap-x-5 py-3">
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
