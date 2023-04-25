import { AiTwotoneHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";

const LocationInfo = ({ thumbnail, name, tags, lat, lng, onLike, onShare }) => {
  return (
    <div className="border-b">
      <div className="flex gap-2 md:gap-5 lg:gap-8">
        <div>
          <img src={thumbnail || "/assets/images/defaults/location.png"} alt={name} className="w-28 h-28" />
        </div>
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl">{name}</h1>
          <div>
            {tags.map((tag) => (
              <span key={tag.id} className="px-2">
                {tag.name}
              </span>
            ))}
          </div>
          <p>
            {lat}, {lng}
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

export default LocationInfo;
