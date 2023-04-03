const TripType = ({ id, name, thumbnail, selected, onSelected }) => {
  return (
    <div
      className={`cursor-pointer bg-white rounded-md shadow-md p-5 ${selected && 'shadow-primary'} duration-500`}
      onClick={() => onSelected(id)}
    >
      <img src={thumbnail} alt={name} />
      <h2 className="text-center">{name}</h2>
    </div>
  )
}

export default TripType
