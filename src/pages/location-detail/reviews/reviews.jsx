import { InputTextarea } from "primereact/inputtextarea";
import avatar from "src/assets/images/avatar.png";
import { Button, Post } from "src/components";
import {
  HiArrowCircleUp,
  HiArrowCircleDown,
  HiArrowNarrowUp,
} from "react-icons/hi";

const Reviews = () => {
  const reviews = [
    {
      id: "1",
      avatar: avatar,
      hostname: "le viet anh",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero sit accusantium eaque praesentium! Vel molestiae repellendus possimus soluta quasi. A, quaerat. Voluptatem tempora illo obcaecati, officiis minus alias accusantium!",
      images: [
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
      ],
    },
    {
      id: "2",
      avatar: avatar,
      hostname: "nguyen thuy hang",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero sit accusantium eaque praesentium! Vel molestiae repellendus possimus soluta quasi. A, quaerat. Voluptatem tempora illo obcaecati, officiis minus alias accusantium!",
      images: [
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
      ],
    },
    {
      id: "3",
      avatar: avatar,
      hostname: "nguyen thuy hang",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero sit accusantium eaque praesentium! Vel molestiae repellendus possimus soluta quasi. A, quaerat. Voluptatem tempora illo obcaecati, officiis minus alias accusantium!",
      images: [
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
        "https://seo-hacker.com/wp-content/uploads/2018/04/Best-URL-Shortening-Tools-For-2018-.jpg",
      ],
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <InputTextarea className="flex-1 mx-10" autoResize />
        <Button type="primary" name="Post" className="h-12 px-6" />
      </div>
      <div>
        {reviews.map((review) => {
          return (
            <div>
              <Post
                key={review.id}
                avatar={review.avatar}
                hostname={review.hostname}
                content={review.content}
                images={review.images}
              />
              <div className="flex gap-20 mt-2">
                <div className="flex items-center gap-5">
                  <HiArrowCircleUp
                    size={25}
                    className="hover:text-primary cursor-pointer"
                  />
                  <span>Upvote</span>
                </div>
                <div className="flex items-center gap-5">
                  <HiArrowCircleDown
                    size={25}
                    className="hover:text-primary cursor-pointer"
                  />
                  <span>Downvote</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
