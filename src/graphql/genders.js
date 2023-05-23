import { gql } from "@apollo/client";

export const GENDERS = gql`
  query {
    genders {
      id
      name
    }
  }
`;
