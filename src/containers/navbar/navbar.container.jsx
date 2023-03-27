import { TabMenu } from 'primereact/tabmenu'
import { useNavigate } from 'react-router-dom'

const NavbarContainer = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div>
      <TabMenu model={data} onTabChange={(e) => navigate(e.value.path)} />
    </div>
  )
}

export default NavbarContainer
