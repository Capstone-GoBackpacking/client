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
    <div className="m-auto w-11/12">
      <Toast ref={toastRef} />
      <div className="mt-10 flex justify-between">
        <div>
          <h2 className="mb-2 font-bold">Hello, Viet Anh Le!</h2>
          <span>Welcome back and explore the world</span>
        </div>
        <div className="flex items-center">
          <CiSearch className="mr-4 h-6 w-6" />
          <InputText
            className="w-96 pt-1"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-around gap-3">
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
      <div className="mt-4 rounded-md shadow-md">
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
                className="h-8 w-8 rounded-full border-0 bg-white"
                icon={GrAddCircle}
                onClick={() =>
                  auth ? navigate(`/${CreateTripRoute}`) : navigate("/login")
                }
              />
              <label>New Your Trip</label>
            </div>
            <div className="flex items-center">
              <ButtonPrime
                className="h-8 w-8 rounded-full border-0 bg-white"
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
                      className="h-32 w-40"
                      src={
                        trip.thumbnail || "/assets/images/defaults/trip.jpeg"
                      }
                      alt={trip.id}
                    />
                    <div className="ml-3 flex-2">
                      <p className="text-xl font-bold">{trip.name}</p>
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
                    <div className="flex flex-1 flex-col items-center justify-evenly">
                      {trip.isHost || trip.targetJoined || (
                        <Button
                          type="primary"
                          name="Join"
                          className="w-32 p-2"
                          onClick={async () => {
                            if (localStorage.getItem("access_token")) {
                              try {
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
                              } catch (error) {
                                toastRef.current.show({
                                  severity: "error",
                                  summary: "Error",
                                  detail: error.message,
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
                        className="w-32 p-2"
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
