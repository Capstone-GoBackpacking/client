import React, { useState } from "react";
import { LocationCard, Tag } from "src/components";
import { InputText } from "primereact/inputtext";

const LocationListingContainer = ({ locations, tags }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="grid grid-cols-1">
      <div className="flex gap-x-2">
        <div className="overflow-x-auto flex items-center gap-x-5 flex-2">
          {tags.map((tag, index) => {
            return <Tag key={index} tag={tag} />;
          })}
        </div>
        <InputText
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
