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
