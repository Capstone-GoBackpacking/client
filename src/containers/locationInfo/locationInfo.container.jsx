const LocationInfo = ({ thumbnail, name, tags, lat, lng }) => {
  return (
    <div className="flex gap-2 md:gap-5 lg:gap-8">
      <div>
        <img src={thumbnail} alt={name} className="w-28 h-28" />
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
  );
};

export default LocationInfo;
