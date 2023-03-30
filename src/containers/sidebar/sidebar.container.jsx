import {
  IoIosHome
} from 'react-icons/io'
import { FaWalking } from 'react-icons/fa'
import {
  HiShoppingCart,
  HiLocationMarker
} from 'react-icons/hi'
import { PanelMenu } from 'primereact/panelmenu'

const SideBar = () => {
  const sidebarOptions = [
    {
      label: 'Home',
      icon: IoIosHome
    },
    {
      label: 'Trips',
      icon: FaWalking
    },
    {
      label: 'Market',
      icon: HiShoppingCart
    },
    {
      label: 'Locations',
      icon: HiLocationMarker
    }
  ]

  return (
    <div className="relative w-40">
      <div className="fixed">
        <PanelMenu model={sidebarOptions} />
      </div>
    </div>
  )
}

export default SideBar
