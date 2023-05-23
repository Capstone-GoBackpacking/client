import { gql } from "@apollo/client";

export const ACCOUNT = gql`
  query ($input: String!) {
    account(input: $input) {
      email
      profile {
        firstName
        lastName
        fullName
        birthday
        avatar
        genderId
      }
    }
  }
`;

export const ASIGN_HOBBIES = gql`
  mutation ($input: AsignHobbiesInput!) {
    asignHobbies(input: $input) {
      id
    }
  }
`;
