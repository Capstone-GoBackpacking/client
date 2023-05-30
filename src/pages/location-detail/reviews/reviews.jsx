import { InputTextarea } from "primereact/inputtextarea";
import avatar from "src/assets/images/avatar.png";
import { Button, Post } from "src/components";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  addVoted,
  reviewsAsync,
} from "src/redux/reducers/reviews/reviews.reducer";
import { useEffect, useState } from "react";
import reviewsSelector from "src/redux/reducers/reviews/reviews.selector";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_REVIEW, VOTE_REVIEW } from "src/graphql/reviews";
import { PERMISSION_REVIEW } from "src/graphql/locations";

const Reviews = () => {
  const { locationId } = useParams();
  const [createReview] = useMutation(CREATE_REVIEW);
  const { reviews } = useSelector(reviewsSelector);
  const dispatch = useDispatch();
  const [reviewContent, setReviewContent] = useState("");
  const [voting] = useMutation(VOTE_REVIEW);
  const { data: permission } = useQuery(PERMISSION_REVIEW, {
    variables: {
      input: locationId,
    },
    fetchPolicy: "network-only",
  });

  const handleCreateReview = async () => {
    const { data } = await createReview({
      variables: {
        input: {
          content: reviewContent,
          locationId,
        },
      },
    });
    dispatch(addReview(data.createReview));
    setReviewContent("");
  };

  useEffect(() => {
    if (locationId) {
      dispatch(reviewsAsync(locationId));
    }
  }, [locationId]);

  const handleVote = (id, status) => {
    voting({
      variables: {
        input: {
          reviewId: id,
          status,
        },
      },
    });
    dispatch(addVoted({ id, vote: status }));
  };

  return (
    <div className="m-auto w-11/12">
      {permission?.permissionReview && (
        <div className="flex justify-between">
          <img
            src={avatar}
            alt="avatar"
            className="h-12 w-12 cursor-pointer rounded-full"
          />
          <InputTextarea
            className="mx-10 flex-1"
            autoResize
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          />
          <Button
            type="primary"
            name="Post"
            className="h-12 px-6"
            onClick={() => handleCreateReview()}
          />
        </div>
      )}
      <div>
        {reviews?.map((review) => {
          return (
            <div key={review.id}>
              <Post
                key={review.id}
                avatar={review.host.profile.avatar}
                hostname={review.host.profile.fullName}
                content={review.content}
                images={review?.images}
              />
              <div className="mt-2 flex gap-20">
                <button
                  className="flex items-center gap-5"
                  onClick={() => handleVote(review.id, "up")}
                >
                  <HiArrowCircleUp
                    size={25}
                    className={`hover:text-primary ${
                      review.targetVoted === "up" && "text-primary"
                    }`}
                  />
                  <span>Upvote</span>
                </button>
                <button
                  className="flex items-center gap-5"
                  onClick={() => handleVote(review.id, "down")}
                >
                  <HiArrowCircleDown
                    size={25}
                    className={`hover:text-primary ${
                      review.targetVoted === "down" && "text-primary"
                    }`}
                  />
                  <span>Downvote</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
