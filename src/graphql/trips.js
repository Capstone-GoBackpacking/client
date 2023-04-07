import { gql } from "@apollo/client";

export const CREATE_TRIP = gql`
  mutation CreateTrip($input: CreateTripInput!) {
    createTrip(input: $input) {
      id
      name
    }
  }
`