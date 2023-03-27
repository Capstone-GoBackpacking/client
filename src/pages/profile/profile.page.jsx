import { FaCarSide } from 'react-icons/fa'
import { AiFillCamera, AiTwotoneShop } from 'react-icons/ai'
import {
  ProfileInfo,
  Navbar
} from '../../containers'
import { ProfileRoute } from '../../routes/route-name.js'

const Profile = () => {
  const navItems = [
    {
      label: 'My Trips',
      icon: FaCarSide,
      url: `${ProfileRoute.name}/${ProfileRoute.childs.trips}`
    },
    {
      label: 'Images',
      icon: AiFillCamera,
      url: `${ProfileRoute.name}/${ProfileRoute.childs.images}`
    },
    {
      label: 'Shop',
      icon: AiTwotoneShop,
      url: `${ProfileRoute.name}/${ProfileRoute.childs.shop}`
    }
  ]

  return (
    <div id="profile" className="w-9/12 m-auto">
      <ProfileInfo />
      <Navbar data={navItems} />
    </div>
  )
}

export default Profile
