import { TabMenu } from 'primereact/tabmenu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarContainer = ({ data }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  return (
    <div>
      <TabMenu
        model={data}
        activeIndex={active}
        onTabChange={(e) => {
          navigate(e.value.path)
          setActive(e.index)
        }}
      />
    </div>
  )
}

export default NavbarContainer
