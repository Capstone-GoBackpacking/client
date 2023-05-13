import { Trip } from "src/components";

const MyTrips = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {data &&
        data.map((trip) => (
          <Trip
            key={trip.id}
            id={trip.id}
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
          />
        ))}
    </div>
  );
};

export default MyTrips;
