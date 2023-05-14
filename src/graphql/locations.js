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
    isFavoriting(input: $id)
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

export const GET_LOCATION_STRING = `
  query ($id: String!) {
    isFavoriting(input: $id)
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

export const UNFAVORITE = gql`
  mutation ($input: String!) {
    unFavorite(input: $input)
  }
`;
