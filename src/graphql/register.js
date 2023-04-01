import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($input: AuthInput!) {
    register(registerInput: $input) {
      id
      email
    }
  }
`
