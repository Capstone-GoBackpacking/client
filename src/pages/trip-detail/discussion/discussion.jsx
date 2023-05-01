import { useMutation } from "@apollo/client";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { Button, Comment, Post } from "src/components";
import { CREATE_POST } from "src/graphql/posts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  addPost,
  postsAsync,
} from "src/redux/reducers/discussion/discussion.reducer";
import discussionSelector from "src/redux/reducers/discussion/discussion.selector";
import { CREATE_COMMENT } from "src/graphql/comments";

const PostDiscussion = ({ post }) => {
  const [createComment] = useMutation(CREATE_COMMENT);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleComment = async () => {
    const { data } = await createComment({
      variables: {
        input: {
          content: comment,
          postId: post.id,
        },
      },
    });
    dispatch(addComment(data.createComment));
    setComment("");
  };

  return (
    <div>
      <Post
        key={post.id}
        avatar={post.avatar}
        hostname={post.author.profile.fullName}
        content={post.content}
        images={post?.images}
      />
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <InputTextarea
            autoResize
            className="w-full p-1 h-8"
            placeholder="Write your comment!"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="primary"
            name="Add"
            className="h-8 px-2"
            onClick={() => handleComment()}
          />
        </div>
        {post.comments?.map((comment) => (
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
};

const Discussion = () => {
  const { tripId } = useParams();
  const [createPost] = useMutation(CREATE_POST);
  const { posts } = useSelector(discussionSelector);
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

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

  useEffect(() => {
    if (tripId) {
      dispatch(postsAsync(tripId));
    }
  }, [tripId]);

  const handleCreatePost = async () => {
    const { data } = await createPost({
      variables: {
        input: {
          content,
          tripId,
        },
      },
    });
    dispatch(addPost(data.createPost));
    setContent("");
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between">
        <img
          src="/assets/images/defaults/avatar.png"
          alt="avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <InputTextarea
          className="flex-1 mx-10"
          autoResize
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="primary"
          name="Post"
          className="h-12 px-6"
          onClick={() => handleCreatePost()}
        />
      </div>
      <div>
        {posts.map((post) => {
          return <PostDiscussion key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Discussion;
