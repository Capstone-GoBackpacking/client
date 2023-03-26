import { FaCarSide } from 'react-icons/fa'
import { AiFillCamera, AiTwotoneShop } from 'react-icons/ai'
import {
  ProfileInfoContainer,
  NavbarContainer
} from '../../containers'

const Profile = () => {
  const navItems = [
    {
      index: 1,
      name: 'My Trips',
      icon: FaCarSide,
      path: 'my-trips'
    },
    {
      index: 2,
      name: 'Images',
      icon: AiFillCamera,
      path: 'images'
    },
    {
      index: 3,
      name: 'Shop',
      icon: AiTwotoneShop,
      path: 'shop'
    }
  ]
  return (
    <div className="w-9/12 m-auto">
      <ProfileInfoContainer />
      <NavbarContainer data={navItems} />
    </div>
  )
}

export default Profile
