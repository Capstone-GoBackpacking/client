import axios from "axios";
import { REVIEWS_OF_LOCATION_STRING } from "src/graphql/reviews";

export const addVoted = (state, action) => {
  const { id, vote } = action.payload;
  state.reviews = state.reviews.map((review) => {
    if (review.id === id) {
      return {
        ...review,
        vote,
      };
    }
    return review;
  });
};

export const addReview = (state, action) => {
  state.reviews.push(action.payload);
};

export const reviewsAsync = async (locationId, _thunkAPI) => {
  try {
    const response = await axios
      .post("http://localhost:3000/graphql", {
        query: REVIEWS_OF_LOCATION_STRING,
        variables: {
          input: locationId,
        },
      })
      .then((res) => {
        const { data } = res.data;
        return data.reviewsOfLocation;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
