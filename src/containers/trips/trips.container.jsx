import { Trip } from "src/components";

const TripsContainer = ({ data, ...props }) => {
  return (
    <div {...props}>
      {data &&
        data.map((trip) => (
          <Trip
            key={trip.id}
            id={trip.id}
            thumbnail={trip.thumbnail}
            from={trip.from}
            to={trip.to}
            timeStart={trip.timeStart}
            timeEnd={trip.timeEnd}
            host={trip.host}
            slot={trip.slot}
            joined={trip.joined}
            verified={trip.verified}
            direction="vertical"
            distance={trip.distance}
          />
        ))}
    </div>
  );
};

export default TripsContainer;
