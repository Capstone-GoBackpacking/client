import { gql } from "@apollo/client";

export const LOCATIONS = gql`
  query {
    locations {
      id
      name
      address
      lat
      lng
      description
      thumbnail
    }
  }
`;

export const GET_LOCATION = gql`
  query ($id: String!) {
    getLocationById(id: $id) {
      name
      lat
      lng
      thumbnail
      tags {
        id
        name
      }
    }
  }
`;

export const FAVORITE = gql`
  mutation ($input: String!) {
    favoriting(input: $input) {
      id
    }
  }
`;
