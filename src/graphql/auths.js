import { gql } from "@apollo/client";

export const AUTH = gql`
  query {
    currentAccount {
      id
    }
  }
`;