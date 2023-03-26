import { Link } from "react-router-dom"

const NavItem = ({ name, Icon, path }) => {
  return (
    <Link className="flex items-center gap-1 pt-2" to={path}>
      <Icon className="w-4 h-4" />
      <span>{name}</span>
    </Link>
  )
}

export default NavItem
