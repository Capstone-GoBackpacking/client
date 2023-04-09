import React, { useState } from "react";
import { LocationCard, Tag } from "src/components";
import { InputText } from "primereact/inputtext";
import { VirtualScroller } from "primereact/virtualscroller";

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
          onChange={(e) => console.log(e.target.value)}
          className="flex-1"
        />
      </div>
        <div className="overflow-x-auto flex items-center gap-x-5 py-3">
          {locations.map((location, index) => {
            return <LocationCard key={index} location={location} />;
          })}
        </div>
    </div>
  );
};

export default LocationListingContainer;
