import { gql } from "@apollo/client";

export const TAGS = gql`
  query {
    tags {
      id
      name
    }
  }
`;
