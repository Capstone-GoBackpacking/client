import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ImageCarousel, Member } from "src/components";
import { MyMap, Navbar, TripInfo } from "src/containers";
import { GET_TRIP, GET_TRIP_WITHOUT_AUTH } from "src/graphql/trips";
import { IoMdChatboxes } from "react-icons/io";
import { AiFillCamera } from "react-icons/ai";
import { Marker, Polyline } from "react-leaflet";

const TripDetail = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(
    localStorage.getItem("access_token") ? GET_TRIP : GET_TRIP_WITHOUT_AUTH,
    {
      variables: {
        id: tripId,
      },
    }
  );

  useEffect(() => {
    if (data?.isJoined) {
      navigate(`/trips/${tripId}/discussion`);
    } else {
      navigate(`/trips/${tripId}/images`);
    }
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

  const navItems = [
    {
      label: "Discussion",
      icon: IoMdChatboxes,
      path: `/trips/${tripId}/discussion`,
      status: data?.isJoined ? "enable" : "disable",
    },
    {
      label: "Images",
      icon: AiFillCamera,
      path: `/trips/${tripId}/images`,
      status: "enable",
    },
  ];

  return (
    <div id="trip-detail" className="w-11/12 m-auto">
      <ImageCarousel data={images} />
      <div className="flex gap-2">
        <div className="flex-2">
          {data?.getTripById && (
            <TripInfo
              thumbnail={data?.getTripById.thumbnail}
              name={data?.getTripById.name}
              from={data?.getTripById.locationStart.name}
              to={data?.getTripById.locationEnd.name}
              start={data?.getTripById.timeStart}
              end={data?.getTripById.timeEnd}
              distance={data?.getTripById.distance}
            />
          )}
          <Navbar data={navItems.filter((item) => item.status === "enable")} />
          <div className="mt-5">
            <Outlet />
          </div>
        </div>
        <div className="flex-1">
          <div className="h-80">
            <MyMap>
              {data?.getTripById && (
                <>
                  <Polyline
                    positions={[
                      [
                        data?.getTripById.locationStart.lat,
                        data?.getTripById.locationStart.lng,
                      ],
                      [
                        data?.getTripById.locationEnd.lat,
                        data?.getTripById.locationEnd.lng,
                      ],
                    ]}
                  />
                  <Marker
                    position={{
                      lat: data?.getTripById.locationStart.lat,
                      lng: data?.getTripById.locationStart.lng,
                    }}
                  ></Marker>
                  <Marker
                    position={{
                      lat: data?.getTripById.locationEnd.lat,
                      lng: data?.getTripById.locationEnd.lng,
                    }}
                  ></Marker>
                </>
              )}
            </MyMap>
          </div>
          <div className="mt-5">
            <label>Host</label>
            <div className="mt-1">
              <Member
                avatar={data?.getTripById.host.profile?.avatar}
                name={data?.getTripById.host.profile?.fullName}
              />
            </div>
          </div>
          <div className="mt-5">
            <label>Members</label>
            <div className="mt-1">
              {data?.getTripById &&
                data?.getTripById.joinedMember.map((member) => (
                  <Member
                    key={member.id}
                    avatar={member.profile.avatar}
                    name={member.profile.fullName}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
