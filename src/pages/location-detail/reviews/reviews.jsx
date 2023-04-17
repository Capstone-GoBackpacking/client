import { InputTextarea } from "primereact/inputtextarea";
import avatar from "src/assets/images/avatar.png";
import { Button, Post } from "src/components";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  reviewsAsync,
} from "src/redux/reducers/reviews/reviews.reducer";
import { useEffect, useState } from "react";
import reviewsSelector from "src/redux/reducers/reviews/reviews.selector";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "src/graphql/reviews";

const Reviews = () => {
  const { locationId } = useParams();
  const [createReview] = useMutation(CREATE_REVIEW);
  const { reviews } = useSelector(reviewsSelector);
  const dispatch = useDispatch();
  const [reviewContent, setReviewContent] = useState("");

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

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        <InputTextarea
          className="flex-1 mx-10"
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
      <div>
        {reviews.map((review) => {
          return (
            <div>
              <Post
                key={review.id}
                avatar={review.host.profile.avatar}
                hostname={review.host.profile.fullName}
                content={review.content}
                images={review?.images}
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
