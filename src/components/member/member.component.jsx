const Member = ({ avatar, name }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={avatar || "/assets/images/defaults/avatar.png"} alt="host-avatar" className="w-8 h-8" />
      <p>{name}</p>
    </div>
  );
};

export default Member;
