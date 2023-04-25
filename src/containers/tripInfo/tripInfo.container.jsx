import { AiTwotoneHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

const TripInfo = ({ thumbnail, name, from, to, start, end, distance, onLike, onShare }) => {
  return (
    <div className="border-b">
      <div className="flex gap-2 md:gap-5 lg:gap-8">
        <div>
          <img src={thumbnail} alt={name} className="w-28 h-28" />
        </div>
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl">{name}</h1>
          <p>{distance} km</p>
          <div>
            <p>From: {from}</p>
            <p>To: {to}</p>
          </div>
          <p>
            {new Date(Number(start)).toLocaleString()} - {new Date(Number(end)).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex gap-5 py-4">
        <AiTwotoneHeart className="cursor-pointer" onClick={() => onLike()} />
        <IoIosShareAlt className="cursor-pointer" onClick={() => onShare()} />
      </div>
    </div>
  );
};

export default TripInfo;
