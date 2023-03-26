import avatar from '../../assets/images/avatar.png'
import { AiFillStar } from 'react-icons/ai'
import { Button } from '../../components'

const ProfileInfoContainer = () => {
  return (
    <div className="border-b py-5">
      <div className="flex w-9/12 m-auto gap-x-3">
        <div>
          <img src={avatar} className="w-40 h-40" alt="avatar" />
        </div>
        <div className="flex flex-col gap-3 justify-center flex-2">
          <h2>Viet Anh Le</h2>
          <p>18/8/2001</p>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-300" />
            <span>10</span>
          </div>
        </div>
        <div className="flex-1">
          <Button type="primary" name="Edit Profile" className="w-full py-1" />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoContainer
