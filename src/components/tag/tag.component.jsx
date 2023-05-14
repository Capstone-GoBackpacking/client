import React, { useState } from "react";
import { Button } from "primereact/button";

const Tag = ({ tag, onClick }) => {
  const [active, setActive] = useState(false);
  return (
    <Button
      className={`font-normal not-italic text-2xl h-5 min-w-max ${
        active ? "bg-primary text-white" : "bg-white text-gray-500"
      }`}
      label={tag}
      text
      raised
      onClick={() => {
        setActive((state) => !state);
        onClick();
      }}
    />
  );
};

export default Tag;
