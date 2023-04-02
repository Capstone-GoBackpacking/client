import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation Login($input: AuthInput!) {
    login(loginInput: $input) {
      access_token
      account {
        id
        email
      }
    }
  }
`
