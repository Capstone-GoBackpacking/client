import { Trip } from "src/components";
import { useQuery } from "@apollo/client";
import { AUTH } from "src/graphql/auths";

const MyTrips = ({ data }) => {
  const { data: auth } = useQuery(AUTH, {
    fetchPolicy: "network-only",
  });

  return (
    <div className="flex flex-col gap-y-4">
      {data &&
        data.map((trip) => (
          <Trip
            key={trip.id}
            id={trip.id}
            name={trip.name}
            thumbnail={trip.thumbnail}
            from={trip.locationStart.name}
            to={trip.locationEnd.name}
            timeStart={trip.timeStart}
            timeEnd={trip.timeEnd}
            host={trip.host.profile.fullName}
            slot={trip.slot}
            joined={trip.joined}
            verified={trip.verified}
            distance={trip.distance}
            isMy={trip.host.id === auth.currentAccount?.id}
          />
        ))}
    </div>
  );
};

export default MyTrips;
