import { IoMdPerson } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { Button, StatusBox } from "..";
import { VscCalendar } from "react-icons/vsc";
import { GiPathDistance } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button as ButtonPrime } from "primereact/button";

const Trip = ({
  id,
  name,
  thumbnail,
  from,
  to,
  timeStart,
  timeEnd,
  host,
  slot,
  joined,
  verified,
  direction = "horizontal",
  distance,
  isMy,
}) => {
  if (direction === "horizontal") {
    return (
      <div className="flex gap-x-2 rounded-md bg-white py-2 px-3 drop-shadow-md">
        <img
          src={thumbnail}
          alt={`${from} - ${to}`}
          className="h-40 w-40 flex-1 object-cover"
        />
        <div className="flex-2 overflow-hidden">
          <h3 className="inline-block w-11/12 cursor-pointer truncate text-lg font-bold hover:text-primary">
            <Link to={`/trips/${id}`}>
              From: {from} - To: {to}
            </Link>
          </h3>
          <p>{name}</p>
          <span className="flex items-center gap-1">
            <GiPathDistance />
            <p>{distance} km</p>
          </span>
          <span className="flex items-center gap-1">
            <VscCalendar />
            <p>
              {timeStart} - {timeEnd}
            </p>
          </span>
          <p className="flex items-center gap-1">
            <IoMdPerson />
            {host}
          </p>
          <p className="flex items-center gap-1">
            <MdGroup />
            <span>
              {joined} / {slot}
            </span>
          </p>
          <StatusBox status={verified} />
        </div>
        {isMy && (
          <div className="flex flex-col justify-evenly">
            <ButtonPrime icon="pi pi-pencil" />
            <ButtonPrime icon="pi pi-trash" severity={"danger"} />
          </div>
        )}
      </div>
    );
  }

  if (direction === "vertical") {
    return (
      <div className="flex flex-col gap-x-2 overflow-hidden rounded-md bg-white drop-shadow-md">
        <img
          src={`${thumbnail}`}
          alt={`${from} - ${to}`}
          className="h-40 w-full object-cover"
        />
        <div className="overflow-hidden p-3">
          <h3 className="inline-block w-11/12 cursor-pointer truncate text-lg font-bold hover:text-primary">
            <p className="text-base">From: {from}</p>
            <p className="text-base">To: {to}</p>
          </h3>
          <span className="flex items-center gap-1">
            <GiPathDistance />
            <p>{distance} km</p>
          </span>
          <span className="flex items-center gap-1">
            <VscCalendar />
            <p className="text-xs">
              {timeStart} - {timeEnd}
            </p>
          </span>
          <p className="flex items-center gap-1">
            <MdGroup />
            <span>
              {joined} / {slot}
            </span>
          </p>
          <div className="flex items-center justify-evenly py-2">
            <Button type="primary" name="Join" className="px-4 py-1" />
            <Button type="primary" name="Detail" className="px-4 py-1" />
          </div>
        </div>
      </div>
    );
  }
};

export default Trip;
