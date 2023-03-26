import { Link } from "react-router-dom"

const SideBarOption = ({ name, path, Icon }) => {
  return (
    <Link className="flex items-center gap-x-2" to={path}>
      <Icon className="w-8 h-8" />
      <span className='text-xl'>{name}</span>
    </Link>
  )
}

export default SideBarOption
