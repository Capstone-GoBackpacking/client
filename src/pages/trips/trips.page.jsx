import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, LocationStory } from "src/components";

const Trips = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 2,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 3,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
    {
      id: 4,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      name: "Quy Nhon, Binh Dinh",
      rating: 5,
    },
  ];

  const trips = [
    {
      id: 1,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      from: "Quang Tri, Quang Tri",
      to: "Quy Nhon, Binh Dinh",
      distance: 400,
      start: "1/1/2000 11:11",
      end: "1/1/2023 11:11",
    },
    {
      id: 2,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      from: "Quang Tri, Quang Tri",
      to: "Quy Nhon, Binh Dinh",
      distance: 400,
      start: "1/1/2000 11:11",
      end: "1/1/2023 11:11",
    },
    {
      id: 3,
      thumbnail:
        "https://www.shutterstock.com/image-photo/one-person-breaks-formation-violation-260nw-1940349595.jpg",
      from: "Quang Tri, Quang Tri",
      to: "Quy Nhon, Binh Dinh",
      distance: 400,
      start: "1/1/2000 11:11",
      end: "1/1/2023 11:11",
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
          <label className="font-bold">Trips</label>
          <p className="text-xs font-light">3 trips found</p>
          <div className="mt-3">
            {trips.map((trip) => (
              <div key={trip.id}>
                <div className="flex">
                  <img
                    className="w-40 h-32"
                    src={trip.thumbnail}
                    alt={trip.id}
                  />
                  <div className="flex-2 ml-3">
                    <p className="font-bold text-xl">
                      From: {trip.from} - To: {trip.to}
                    </p>
                    <p>{trip.distance} km</p>
                    <p>
                      {trip.start} - {trip.end}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-evenly">
                    <Button type="primary" name="Join" className="p-2 w-32" />
                    <Button
                      type="primary"
                      name="Detail"
                      className="p-2 w-32"
                      onClick={() => navigate(`/locations/${trip.id}`)}
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
