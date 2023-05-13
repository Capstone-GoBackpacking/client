import { AiFillStar } from "react-icons/ai";
import { Button } from "src/components";
import defaultAvatar from "src/assets/images/avatar.png";

const ProfileInfoContainer = ({ avatar, fullName, birthday, star, email }) => {
  return (
    <div className="border-b py-5">
      <div className="flex w-11/12 m-auto gap-x-3">
        <div>
          <img
            src={avatar || defaultAvatar}
            className="w-40 h-40"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center flex-2">
          <h2>{fullName || "Who are you?"}</h2>
          <p>{email}</p>
          <p>{birthday}</p>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-300" />
            <span>{star || 0}</span>
          </div>
        </div>
        <div className="flex-1">
          <Button type="primary" name="Edit Profile" className="w-full py-1" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoContainer;
