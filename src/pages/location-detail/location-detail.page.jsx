import { ImageCarousel } from "src/components";
import { LocationInfo, MyMap, Navbar } from "src/containers";
import { LocationDetailRoute } from "src/routes/route-name";
import { AiOutlineSetting, AiFillCamera } from "react-icons/ai";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { Marker } from "react-leaflet";

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

  const relateTrips = [
    {
      id: "1",
      name: "hahahahahahah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem aliquid officiis maxime quidem tempore ducimus",
      host: "Le Viet Anh",
      joined: 2,
      limit: 4,
      from: "this is from",
      to: "this is to",
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
    {
      id: "2",
      name: "hahahahahahah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem aliquid officiis maxime quidem tempore ducimus",
      host: "Le Viet Anh",
      joined: 2,
      limit: 4,
      from: "this is from",
      to: "this is to",
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
    },
  ];

  const navItems = [
    {
      label: "Reviews",
      icon: BsFillChatRightDotsFill,
      path: `${LocationDetailRoute.path}/${LocationDetailRoute.childs.reviews}`,
    },
    {
      label: "Services",
      icon: AiOutlineSetting,
      path: `/${LocationDetailRoute.path}/${LocationDetailRoute.childs.services}`,
    },
    {
      label: "Images",
      icon: AiFillCamera,
      path: `/${LocationDetailRoute.path}/${LocationDetailRoute.childs.images}`,
    },
  ];

  const handleLike = () => {};

  const handleShare = () => {};

  return (
    <div id="location-detail" className="w-11/12 m-auto">
      <ImageCarousel data={images} />
      <div className="flex gap-2">
        <div className="flex-2">
          <LocationInfo
            thumbnail={target.thumbnail}
            name={target.name}
            tags={target.tags}
            lat={target.lat}
            lng={target.lng}
            onLike={handleLike}
            onShare={handleShare}
          />
          <Navbar data={navItems} />
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
        <div className="flex-1">
          <div className="h-80">
            <MyMap>
              <Marker position={{ lat: target.lat, lng: target.lng }}></Marker>
            </MyMap>
          </div>
          <div className="mt-5">
            <label>Relate trips</label>
            <div>
              {relateTrips.map((trip) => (
                <div key={trip.id} className="mt-4 shadow-md bg-white">
                  <div className="flex gap-2 p-2">
                    <img
                      src={trip.thumbnail}
                      alt={trip.name}
                      className="w-28"
                    />
                    <div>
                      <p className="font-bold">{trip.name}</p>
                      <p>{trip.host}</p>
                      <span>
                        {trip.joined} / {trip.limit}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
