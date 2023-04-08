import { IoMdPerson } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { Button, StatusBox } from "..";
import { VscCalendar } from "react-icons/vsc";
import { GiPathDistance } from 'react-icons/gi'

const Trip = ({
  id,
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
  distance
}) => {
  console.log(thumbnail);
  if (direction === "horizontal") {
    return (
      <div className="flex py-2 px-3 rounded-md drop-shadow-md bg-white gap-x-2">
        <img
          src={thumbnail}
          alt={`${from} - ${to}`}
          className="w-40 h-40 object-cover flex-1"
        />
        <div className="flex-2 overflow-hidden">
          <h3 className="inline-block font-bold text-lg truncate w-11/12 cursor-pointer hover:text-primary">
            From: {from} - To: {to}
          </h3>
          <span className="flex items-center gap-1">
            <GiPathDistance/>
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
      </div>
    );
  }

  if (direction === "vertical") {
    return (
      <div className="flex flex-col rounded-md drop-shadow-md bg-white gap-x-2 overflow-hidden">
        <img
          src={`${thumbnail}`}
          alt={`${from} - ${to}`}
          className="w-full h-40 object-cover"
        />
        <div className="overflow-hidden p-3">
          <h3 className="inline-block font-bold text-lg truncate w-11/12 cursor-pointer hover:text-primary">
            <p className="text-base">From: {from}</p>
            <p className="text-base">To: {to}</p>
          </h3>
          <span className="flex items-center gap-1">
            <GiPathDistance/>
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
            <Button type="primary" name="Join" className="px-4 py-1"/>
            <Button type="primary" name="Detail" className="px-4 py-1"/>
          </div>
        </div>
      </div>
    );
  }
};

export default Trip;
