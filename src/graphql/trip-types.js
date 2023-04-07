import { gql } from "@apollo/client";

export const TRIPTYPES = gql`
  query {
    types {
      id
      name
      icon
    }
  }
`;
