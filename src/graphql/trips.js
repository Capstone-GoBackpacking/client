import { gql } from "@apollo/client";

export const CREATE_TRIP = gql`
  mutation CreateTrip($input: CreateTripInput!) {
    createTrip(input: $input) {
      id
      name
    }
  }
`;

export const TRIPS = gql`
  query {
    trips {
      id
      name
      locationEnd {
        name
      }
      locationStart {
        name
      }
      timeEnd
      timeStart
      thumbnail
      distance
    }
  }
`;

export const JOIN_TRIP = gql`
  mutation ($input: String!) {
    joinTrip(input: $input) {
      id
      tripId
      memberId
    }
  }
`;
