import { Image } from "primereact/image";

const Post = ({ avatar, hostname, content, images }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-10">
        <img src={avatar} alt="avatar" className="w-12 h-12" />
        <p>{hostname}</p>
      </div>
      <div className="mt-2">
        <p>{content}</p>
        <div className="flex justify-center">
          {images &&
            images.map((image, index) => {
              return <Image key={index} src={image} alt="post image" preview />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Post;
