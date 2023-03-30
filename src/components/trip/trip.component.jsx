import { IoMdPerson } from 'react-icons/io'
import { MdGroup } from 'react-icons/md'

const Trip = ({ id, thumbnail, from, to, timeStart, timeEnd, host, slot, joined, verified }) => {
  return (
    <div className="flex py-2 px-3 rounded-md drop-shadow-md bg-white gap-x-2">
      <img
        src={thumbnail} alt={`${from} - ${to}`}
        className="w-40 h-28 object-cover flex-1"
      />
      <div className="flex-2 overflow-hidden">
        <h3 className="inline-block font-bold text-lg truncate w-11/12 cursor-pointer hover:text-primary">From: {from} - To: {to}</h3>
        <p>{timeStart} - {timeEnd}</p>
        <p className="flex items-center gap-1">
          <IoMdPerson />
          {host}
        </p>
        <p className="flex items-center gap-1">
          <MdGroup />
          <span>{joined} / {slot}</span>
        </p>
      </div>
    </div>
  )
}

export default Trip
