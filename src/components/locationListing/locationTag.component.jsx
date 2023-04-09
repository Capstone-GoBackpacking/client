import React from "react";
import { Button } from "primereact/button";

const LocationTag = ({ tag }) => {
  return (
    <Button
      className="mr-10 text-black font-normal not-italic text-2xl h-5 min-w-max"
      label={tag}
      text
      raised
    />
  );
};

export default LocationTag;
