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

export const GET_TRIP = gql`
  query ($id: String!) {
    isJoined(input: $id)
    getTripById(id: $id) {
      id
      name
      thumbnail
      locationStart {
        id
        name
        lat
        lng
      }
      locationEnd {
        id
        name
        lat
        lng
      }
      timeEnd
      timeStart
      host {
        id
        profile {
          avatar
          fullName
        }
      }
      joinedMember {
        id
        profile {
          avatar
          fullName
        }
      }
      distance
    }
  }
`;
