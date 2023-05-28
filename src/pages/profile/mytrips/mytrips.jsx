import { Button } from "primereact/button";
import { GrAddCircle } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { InputText } from "primereact/inputtext";
import { Tree } from "primereact/tree";
import { MyTrips as MyTripsContainer } from "src/containers";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { MY_TRIP } from "src/graphql/trips";

const MyTrips = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const { data: myTrips } = useQuery(MY_TRIP, {
    variables: {
      input: {
        accountId: profileId,
      },
    },
    fetchPolicy: "network-only",
  });

  const filterOptions = [
    {
      key: "0",
      label: "Status",
      children: [
        {
          key: "0-0",
          label: "Enable",
        },
        {
          key: "0-1",
          label: "Disable",
        },
        {
          key: "0-2",
          label: "Pending",
        },
      ],
    },
  ];

  return (
    <>
      <div className="md:flex">
        <div className="flex flex-1 gap-5">
          <div className="flex items-center">
            <Button
              onClick={() => navigate("/create-trip")}
              className="h-8 w-8 rounded-full border-0 bg-white"
              icon={GrAddCircle}
            />
            <label>New</label>
          </div>
          <div>
            <span className="p-input-icon-left">
              <CiSearch className="h-4 w-4" />
              <InputText className="pt-1" />
            </span>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mt-5 flex gap-5">
        <div className="flex-1">
          <Tree value={filterOptions} />
        </div>
        <div className="flex-3">
          <MyTripsContainer data={myTrips?.myTrip} />
        </div>
      </div>
    </>
  );
};

export default MyTrips;
