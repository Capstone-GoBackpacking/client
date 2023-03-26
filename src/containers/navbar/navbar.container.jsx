import { NavItem } from "../../components"

const NavbarContainer = ({ data }) => {
  return (
    <div className="flex gap-10 items-center justify-center">
      {data.map(item => <NavItem key={item.index} name={item.name} Icon={item.icon} path={item.path} />)}
    </div>
  )
}

export default NavbarContainer
