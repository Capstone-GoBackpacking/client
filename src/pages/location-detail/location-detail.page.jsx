import { ImageCarousel } from "src/components";
import { LocationInfo, MyMap, Navbar } from "src/containers";
import { AiOutlineSetting, AiFillCamera } from "react-icons/ai";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { Marker } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { FAVORITE, GET_LOCATION, UNFAVORITE } from "src/graphql/locations";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  targetLocation,
  toggleFavorite,
} from "src/redux/reducers/locations/locations.reducer";
import locationsSelector from "src/redux/reducers/locations/locations.selector";

const LocationDetail = () => {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { target, isFavorited } = useSelector(locationsSelector);

  const { data, loading, error } = useQuery(GET_LOCATION, {
    variables: { id: locationId },
  });

  const [favoriting] = useMutation(FAVORITE);
  const [unFavorite] = useMutation(UNFAVORITE);

  useEffect(() => {
    if (data) {
      dispatch(targetLocation(data));
    }
    navigate(`/locations/${locationId}/reviews`);
  }, [data]);

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
      path: `/locations/${locationId}/reviews`,
    },
    {
      label: "Services",
      icon: AiOutlineSetting,
      path: `/locations/${locationId}/services`,
    },
    {
      label: "Images",
      icon: AiFillCamera,
      path: `/locations/${locationId}/images`,
    },
  ];

  const handleLike = async () => {
    if (isFavorited) {
      await unFavorite({
        variables: {
          input: locationId,
        },
      });
      dispatch(toggleFavorite(false));
    } else {
      await favoriting({
        variables: {
          input: locationId,
        },
      });
      dispatch(toggleFavorite(true));
    }
  };

  const handleShare = () => {};

  return (
    <div id="location-detail" className="w-11/12 m-auto">
      <ImageCarousel data={images} />
      <div className="flex gap-2">
        <div className="flex-2">
          {target && (
            <LocationInfo
              isFavoriting={isFavorited}
              thumbnail={target.thumbnail}
              name={target.name}
              tags={target.tags}
              lat={target.lat}
              lng={target.lng}
              onLike={handleLike}
              onShare={handleShare}
            />
          )}
          <Navbar data={navItems} />
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
        <div className="flex-1">
          <div className="h-80">
            <MyMap>
              {target && (
                <Marker
                  position={{
                    lat: target.lat,
                    lng: target.lng,
                  }}
                ></Marker>
              )}
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
