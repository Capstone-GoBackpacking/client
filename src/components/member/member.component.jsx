import { useNavigate } from "react-router-dom";

const Member = ({ avatar, name, memberId }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={() => {
        navigate(`/profile/${memberId}`);
      }}
    >
      <img
        src={avatar || "/assets/images/defaults/avatar.png"}
        alt="host-avatar"
        className="h-8 w-8"
      />
      <p>{name}</p>
    </div>
  );
};

export default Member;
