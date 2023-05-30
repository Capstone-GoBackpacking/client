import { Timeline } from "primereact/timeline";
import { TbCategory2, TbListDetails } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import TripTypes from "./tripTypes/tripTypes";
import Locations from "./locations/locations";
import Description from "./description/description";
import { Button } from "src/components";
import { useSelector } from "react-redux";
import createTripSelector from "src/redux/reducers/create-trip/create-trip.selector";
import { useMutation } from "@apollo/client";
import { CREATE_TRIP } from "src/graphql/trips";
import Upload from "./upload/upload";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const CreateTrip = () => {
  const { type, from, to, start, end, name, slot, description, thumbnail } =
    useSelector(createTripSelector);

  const toast = useRef();
  const [createTrip] = useMutation(CREATE_TRIP);

  const events = [
    {
      Icon: TbCategory2,
      color: "#F13E3E",
      Element: TripTypes,
    },
    {
      Icon: HiLocationMarker,
      color: "#31A436",
      Element: Locations,
    },
    {
      Icon: TbListDetails,
      color: "#FBBC05",
      Element: Description,
    },
    {
      Icon: AiOutlineCloudUpload,
      color: "#6C63FF",
      Element: Upload,
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full`}
        style={{ backgroundColor: item.color }}
      >
        <item.Icon className="text-white" />
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <div className="my-5">
        <item.Element haha={true} />
      </div>
    );
  };

  const handleSubmitCreateTrip = async () => {
    try {
      await createTrip({
        variables: {
          input: {
            typeId: type,
            locationEndId: to,
            locationStartId: from,
            slot: slot,
            timeStart: start,
            timeEnd: end,
            name: name,
            thumbnail: thumbnail,
            description: description,
          },
        },
      });
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Create Trip Success",
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Failed",
        detail: "Create Trip Failed",
      });
    }
  };

  return (
    <div className="m-auto my-10 w-11/12">
      <Toast ref={toast} />
      <div id="create-trip" className="">
        <Timeline
          value={events}
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
      <div className="pb-10">
        <Button
          type="primary"
          name="Create trip"
          className="float-right px-4 py-2"
          onClick={handleSubmitCreateTrip}
        />
      </div>
    </div>
  );
};

export default CreateTrip;
