import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, LocationStory } from "src/components";
import { Button as ButtonPrime } from "primereact/button";
import { useMutation, useQuery } from "@apollo/client";
import { JOIN_TRIP, TRIPS } from "src/graphql/trips";
import { GrAddCircle } from "react-icons/gr";
import { CreateTripRoute } from "src/routes/route-name";

const Trips = () => {
  const navigate = useNavigate();
  const { data: tripData, loading, error } = useQuery(TRIPS);
  const [joinTrip] = useMutation(JOIN_TRIP);

  const data = [
    {
      id: 1,
      thumbnail: "https://tieudung.kinhtedothi.vn/upload_images/images/2020/06/25/du-lich-quy-nhon-binh-dinh_1.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 2,
      thumbnail: "https://tieudung.kinhtedothi.vn/upload_images/images/2020/06/25/du-lich-quy-nhon-binh-dinh_1.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 3,
      thumbnail: "https://tieudung.kinhtedothi.vn/upload_images/images/2020/06/25/du-lich-quy-nhon-binh-dinh_1.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 4,
      thumbnail: "https://tieudung.kinhtedothi.vn/upload_images/images/2020/06/25/du-lich-quy-nhon-binh-dinh_1.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="font-bold mb-2">Hello, Viet Anh Le!</h2>
          <span>Welcome back and explore the world</span>
        </div>
        <div className="flex items-center">
          <CiSearch className="h-6 w-6 mr-4" />
          <InputText className="pt-1 w-96" />
        </div>
      </div>
      <div className="flex justify-around mt-8">
        {data.map((location) => {
          return (
            <LocationStory
              key={location.id}
              thumbnail={location.thumbnail}
              name={location.name}
              rating={location.rating}
            />
          );
        })}
      </div>
      <div className="rounded-md shadow-md mt-4">
        <div className="p-4">
          <div className="flex gap-10">
            <div>
              <label className="font-bold">Trips</label>
              <p className="text-xs font-light">{tripData && tripData.trips.length} trips found</p>
            </div>
            <div className="flex items-center">
              <ButtonPrime
                className="w-8 h-8 bg-white rounded-full border-0"
                icon={GrAddCircle}
                onClick={() => navigate(`/${CreateTripRoute}`)}
              />
              <label>New Your Trip</label>
            </div>
          </div>
          <div className="mt-3">
            {tripData &&
              tripData.trips.map((trip) => (
                <div key={trip.id} className="mb-3">
                  <div className="flex">
                    <img
                      className="w-40 h-32"
                      src={trip.thumbnail || "/assets/images/defaults/trip.jpeg"}
                      alt={trip.id}
                    />
                    <div className="flex-2 ml-3">
                      <p className="font-bold text-xl">{trip.name}</p>
                      <p>
                        From: {trip.locationStart.name} - To: {trip.locationEnd.name}
                      </p>
                      <p>{trip.distance} km</p>
                      <p>
                        {new Date(Number(trip.timeStart)).toLocaleString()} -{" "}
                        {new Date(Number(trip.timeEnd)).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-evenly">
                      {trip.targetJoined || (
                        <Button
                          type="primary"
                          name="Join"
                          className="p-2 w-32"
                          onClick={() =>
                            joinTrip({
                              variables: {
                                input: trip.id,
                              },
                            })
                          }
                        />
                      )}
                      <Button
                        type="primary"
                        name="Detail"
                        className="p-2 w-32"
                        onClick={() => navigate(`/trips/${trip.id}`)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
