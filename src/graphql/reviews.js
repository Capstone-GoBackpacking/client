import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation ($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
      host {
        profile {
          fullName
          avatar
        }
      }
      content
    }
  }
`;

export const REVIEWS_OF_LOCATION_STRING = `
  query ($input: String!) {
    reviewsOfLocation(locationId: $input) {
      id
      content
      targetVoted
      host {
        profile {
          fullName
          avatar
        }
      }
    }
  }
`;

export const REVIEWS_OF_LOCATION = gql`
  ${REVIEWS_OF_LOCATION_STRING}
`;

export const VOTE_REVIEW = gql`
  mutation ($input: CreateVoteReviewInput!) {
    voting(input: $input) {
      id
      reviewId
      accountId
      status
    }
  }
`;
