import { InputTextarea } from "primereact/inputtextarea";
import { Button, Comment, Post } from "src/components";

const Discussion = () => {
  const discussions = [
    {
      id: "1",
      hostname: "viet anh le",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat voluptatem beatae aut saepe, voluptates cum hic corporis magni corrupti, distinctio dignissimos fuga illo ut provident rerum unde libero nihil!",
      comments: [
        {
          id: "1",
          hostname: "viet anh le",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod laborum explicabo rem voluptatem, aspernatur blanditiis repellat cupiditate veritatis minima, adipisci voluptates quis vitae id molestiae similique quidem? Voluptates, quisquam.",
          replies: [
            {
              id: "1",
              hostname: "viet anh le",
              content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod laborum explicabo rem voluptatem, aspernatur blanditiis repellat cupiditate veritatis minima, adipisci voluptates quis vitae id molestiae similique quidem? Voluptates, quisquam.",
            },
            {
              id: "2",
              hostname: "viet anh le",
              content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod laborum explicabo rem voluptatem, aspernatur blanditiis repellat cupiditate veritatis minima, adipisci voluptates quis vitae id molestiae similique quidem? Voluptates, quisquam.",
              replies: [
                {
                  id: "1",
                  hostname: "viet anh le",
                  content:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod laborum explicabo rem voluptatem, aspernatur blanditiis repellat cupiditate veritatis minima, adipisci voluptates quis vitae id molestiae similique quidem? Voluptates, quisquam.",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          hostname: "viet anh le",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod laborum explicabo rem voluptatem, aspernatur blanditiis repellat cupiditate veritatis minima, adipisci voluptates quis vitae id molestiae similique quidem? Voluptates, quisquam.",
        },
      ],
    },
    {
      id: "2",
      hostname: "viet anh le",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat voluptatem beatae aut saepe, voluptates cum hic corporis magni corrupti, distinctio dignissimos fuga illo ut provident rerum unde libero nihil!",
      comments: [],
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between">
        <img src="/assets/images/defaults/avatar.png" alt="avatar" className="w-12 h-12 rounded-full cursor-pointer" />
        <InputTextarea className="flex-1 mx-10" autoResize />
        <Button type="primary" name="Post" className="h-12 px-6" />
      </div>
      <div>
        {discussions.map((discussion) => {
          return (
            <div key={discussion.id}>
              <Post
                key={discussion.id}
                avatar={discussion.avatar}
                hostname={discussion.hostname}
                content={discussion.content}
                images={discussion?.images}
              />
              <div className="mt-2">
                <InputTextarea autoResize className="w-full" placeholder="Write your comment!" />
                {discussion.comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    text={comment.content}
                    hostname={comment.hostname}
                    avatar={comment.avatar}
                    replies={comment.replies}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discussion;
