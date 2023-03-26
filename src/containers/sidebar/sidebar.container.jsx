import {
  IoIosHome
} from 'react-icons/io'
import { FaWalking } from 'react-icons/fa'
import {
  HiShoppingCart,
  HiLocationMarker
} from 'react-icons/hi'
import { SideBarOption } from '../../components'

const SideBar = () => {
  const sidebarOptions = [
    {
      index: 1,
      name: 'Home',
      path: '/',
      icon: IoIosHome
    },
    {
      index: 2,
      name: 'Trips',
      path: '/trips',
      icon: FaWalking
    },
    {
      index: 3,
      name: 'Market',
      path: '/market',
      icon: HiShoppingCart
    },
    {
      index: 4,
      name: 'Locations',
      path: '/locations',
      icon: HiLocationMarker
    }
  ]

  return (
    <div className="w-255p gap-y-5 flex flex-col pl-5 border-r h-screen">
      {sidebarOptions.map(option => <SideBarOption key={option.index} name={option.name} path={option.path} Icon={option.icon} />)}
    </div>
  )
}

export default SideBar
