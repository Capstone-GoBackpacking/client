import { ImageCarousel } from "src/components";
import { LocationInfo } from "src/containers";

const LocationDetail = () => {
  const images = [
    {
      id: "1",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "2",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "3",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "4",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "5",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "6",
      url: "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
  ];

  const target = {
    id: "1",
    thumbnail:
      "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    name: "Thang canh thien nhien Nhon Hai",
    tags: [
      {
        id: "1",
        name: "tag 1",
      },
      {
        id: "2",
        name: "tag 2",
      },
    ],
    lat: "8",
    lng: "8",
  };

  return (
    <div className="w-11/12 m-auto">
      <ImageCarousel data={images} />
      <LocationInfo
        thumbnail={target.thumbnail}
        name={target.name}
        tags={target.tags}
        lat={target.lat}
        lng={target.lng}
      />
    </div>
  );
};

export default LocationDetail;
