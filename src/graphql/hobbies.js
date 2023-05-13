import { gql } from "@apollo/client";

export const HOBBIES = gql`
  query {
    hobbies {
      id
      name
    }
  }
`;
