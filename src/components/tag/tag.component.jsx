import React from "react";
import { Button } from "primereact/button";

const Tag = ({ tag }) => {
  return (
    <Button
      className="text-black font-normal not-italic text-2xl h-5 min-w-max"
      label={tag}
      text
      raised
    />
  );
};

export default Tag;
