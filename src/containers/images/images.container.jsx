import { Image } from "primereact/image";

const ImagesContainer = ({ data }) => {
  return (
    <>
      {data?.map((image) => (
        <Image
          className="h-40 overflow-hidden rounded-md md:h-80"
          key={image.id}
          src={image.url}
          alt={image.id}
          preview
        />
      ))}
    </>
  );
};

export default ImagesContainer;
