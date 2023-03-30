import { Image } from "primereact/image"

const Equipment = ({ id, name, tags, price, thumbnail }) => {
  return (
    <div className="cursor-pointer bg-white drop-shadow-md hover:scale-110 duration-500 ease-linear rounded-md">
      <Image
        src={thumbnail}
        alt={name}
        className="h-20 md:h-32 w-full"
        preview
      />
      <div className="p-2">
        <p className="truncate">{name}</p>
        <div className="flex gap-2 overflow-x-auto hide-scroll">
          {tags.map(tag => <div className="px-2 border-2 border-primary text-xs">#{tag}</div>)}
        </div>
        <p className="text-primary">{price} vnd</p>
      </div>
    </div>
  )
}

export default Equipment
