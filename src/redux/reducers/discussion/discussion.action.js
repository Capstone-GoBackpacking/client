import axios from "axios";
import { POSTS_OF_TRIP_STRING } from "src/graphql/posts";

export const addComment = (state, action) => {
  const comment = action.payload;
  state.posts = state.posts.map((post) =>
    post.id === comment.post.id
      ? { ...post, comments: [...post.comments, comment] }
      : post
  );
};

export const addPost = (state, action) => {
  state.posts.push({ ...action.payload, comments: [] });
};

export const postsAsync = async (tripId, _thunkAPI) => {
  try {
    const response = await axios
      .post(
        "http://localhost:3000/graphql",
        {
          query: POSTS_OF_TRIP_STRING,
          variables: {
            input: tripId,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        const { data } = res.data;
        return data.postsOfTrip;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
