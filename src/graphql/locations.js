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
      trips {
        id
        thumbnail
        name
        host {
          profile {
            lastName
            firstName
          }
        }
        slot
        joinedMember {
          id
        }
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
      trips {
        id
        thumbnail
        name
        host {
          profile {
            lastName
            firstName
          }
        }
        slot
        joinedMember {
          id
        }
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

export const SEARCH_LOCATION = gql`
  query ($input: SearchLocationInput!) {
    searchLocation(input: $input) {
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

export const TOP_LOCATION = gql`
  query ($input: DirectionInput!) {
    directionFavorite(input: $input) {
      id
      name
      thumbnail
      favoriteNumber
    }
  }
`;

export const PERMISSION_REVIEW = gql`
  query ($input: String!) {
    permissionReview(input: $input)
  }
`;
