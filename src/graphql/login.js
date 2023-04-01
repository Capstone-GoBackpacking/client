const { gql } = require("@apollo/client")

export const LOGIN = gql`
  mutation($input: AuthInput!) {
    login(loginInput: $input) {
      access_token
      account {
        id
        email
      }
    }
  }
`
