import { Image } from "primereact/image";

const ImagesContainer = ({ data }) => {
  return (
    <>
      {data.map((image) => (
        <Image
          className="h-40 md:h-80 rounded-md overflow-hidden"
          key={image.id}
          src={image.src}
          alt={image.name}
          preview
        />
      ))}
    </>
  );
};

export default ImagesContainer;
