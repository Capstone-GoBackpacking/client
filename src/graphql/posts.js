import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      content
      time
      author {
        profile {
          fullName
        }
      }
      images {
        url
      }
      time
    }
  }
`;

export const POSTS_OF_TRIP_STRING = `
  query($input: String!) {
    postsOfTrip(input:$input) {
      id
      content
      time
      author {
        profile {
          fullName
        }
      }
      comments {
        id
        content
        time
        author {
          profile {
            fullName
          }
        }
      }
      images {
        url
      }
      time
    }
  }
`;

export const POSTS_OF_TRIP = gql`
  ${POSTS_OF_TRIP_STRING}
`;
