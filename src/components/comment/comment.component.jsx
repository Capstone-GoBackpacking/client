import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ImReply } from "react-icons/im";

const Comment = ({ text, hostname, avatar, replies = [] }) => {
  const [reply, setReply] = useState(false);

  return (
    <div>
      <div className="flex gap-2 my-2">
        <img src={avatar || "/assets/images/defaults/avatar.png"} alt="avatar" className="w-8 h-8" />
        <p>{text}</p>
      </div>
      <div className="ml-10">
        <ImReply className="cursor-pointer" onClick={() => setReply((state) => !state)} />
        {reply && <InputText className="w-full" placeholder="Write your reply!" />}
        {reply &&
          replies.map((reply) => (
            <Comment key={reply.id} text={reply.content} avatar={reply.avatar} replies={reply.replies} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
