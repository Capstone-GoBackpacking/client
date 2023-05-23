import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, LocationStory } from "src/components";
import { Button as ButtonPrime } from "primereact/button";
import { useMutation, useQuery } from "@apollo/client";
import { JOIN_TRIP, TRIPS, TRIPS_WITHOUT_TARGET } from "src/graphql/trips";
import { GrAddCircle, GrTemplate } from "react-icons/gr";
import { CreateTripRoute, GenerateTripRoute } from "src/routes/route-name";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { TOP_LOCATION } from "src/graphql/locations";
import { AUTH } from "src/graphql/auths";

const Trips = () => {
  const navigate = useNavigate();
  const { data } = useQuery(
    localStorage.getItem("access_token") ? TRIPS : TRIPS_WITHOUT_TARGET,
    {
      fetchPolicy: "network-only",
    }
  );
  const { data: dataL } = useQuery(TOP_LOCATION, {
    variables: {
      input: {
        top: 4,
        direction: "desc",
      },
    },
    fetchPolicy: "network-only",
  });
  const { data: auth } = useQuery(AUTH, {
    fetchPolicy: "network-only",
  });
  const [joinTrip] = useMutation(JOIN_TRIP);
  const [inputSearch, setInputSearch] = useState("");

  const toastRef = useRef(null);

  return (
    <div className="w-11/12 m-auto">
      <Toast ref={toastRef} />
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="font-bold mb-2">Hello, Viet Anh Le!</h2>
          <span>Welcome back and explore the world</span>
        </div>
        <div className="flex items-center">
          <CiSearch className="h-6 w-6 mr-4" />
          <InputText
            className="pt-1 w-96"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-around mt-8 gap-3">
        {dataL?.directionFavorite?.map((location) => {
          return (
            <LocationStory
              id={location.id}
              key={location.id}
              thumbnail={location.thumbnail}
              name={location.name}
              rating={location.favoriteNumber}
            />
          );
        })}
      </div>
      <div className="rounded-md shadow-md mt-4">
        <div className="p-4">
          <div className="flex gap-10">
            <div>
              <label className="font-bold">Trips</label>
              <p className="text-xs font-light">
                {data && data.trips?.length} trips found
              </p>
            </div>
            <div className="flex items-center">
              <ButtonPrime
                className="w-8 h-8 bg-white rounded-full border-0"
                icon={GrAddCircle}
                onClick={() =>
                  auth ? navigate(`/${CreateTripRoute}`) : navigate("/login")
                }
              />
              <label>New Your Trip</label>
            </div>
            <div className="flex items-center">
              <ButtonPrime
                className="w-8 h-8 bg-white rounded-full border-0"
                icon={GrTemplate}
                onClick={() => navigate(`/${GenerateTripRoute}`)}
              />
              <label>Generate Template</label>
            </div>
          </div>
          <div className="mt-3">
            {data &&
              data.trips?.map((trip) => (
                <div key={trip.id} className="mb-3">
                  <div className="flex">
                    <img
                      className="w-40 h-32"
                      src={
                        trip.thumbnail || "/assets/images/defaults/trip.jpeg"
                      }
                      alt={trip.id}
                    />
                    <div className="flex-2 ml-3">
                      <p className="font-bold text-xl">{trip.name}</p>
                      <p>
                        From: {trip.locationStart.name} - To:{" "}
                        {trip.locationEnd.name}
                      </p>
                      <p>{trip.distance} km</p>
                      <p>
                        {new Date(Number(trip.timeStart)).toLocaleString()} -{" "}
                        {new Date(Number(trip.timeEnd)).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-evenly">
                      {trip.isHost || trip.targetJoined || (
                        <Button
                          type="primary"
                          name="Join"
                          className="p-2 w-32"
                          onClick={async () => {
                            if (localStorage.getItem("access_token")) {
                              const response = await joinTrip({
                                variables: {
                                  input: trip.id,
                                },
                              });
                              if (response.data) {
                                toastRef.current.show({
                                  severity: "success",
                                  summary: "Success",
                                  detail: "Send request to join",
                                  life: 2000,
                                });
                              }
                            } else {
                              navigate("/login");
                            }
                          }}
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
