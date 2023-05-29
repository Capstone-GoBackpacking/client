import { ImagesContainer } from "src/containers";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TRIP, GET_TRIP_WITHOUT_AUTH } from "src/graphql/trips";

const Images = () => {
  const { tripId } = useParams();
  const { data } = useQuery(
    localStorage.getItem("access_token") ? GET_TRIP : GET_TRIP_WITHOUT_AUTH,
    {
      variables: {
        id: tripId,
      },
      fetchPolicy: "network-only",
    }
  );

  return (
    <div
      id="profile-images"
      className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {data?.getTripById.posts && (
        <ImagesContainer
          data={data?.getTripById.posts.reduce((prev, next) => {
            return [...prev, ...next?.images];
          }, [])}
        />
      )}
    </div>
  );
};

export default Images;
