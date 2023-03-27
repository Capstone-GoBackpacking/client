import { TabMenu } from 'primereact/tabmenu'

const NavbarContainer = ({ data }) => {
  return (
    <div>
      <TabMenu model={data} />
    </div>
  )
}

export default NavbarContainer
