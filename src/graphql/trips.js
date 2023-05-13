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
      isHost
      targetJoined
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

export const TRIPS_WITHOUT_TARGET = gql`
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
    isHost(input: $id)
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

export const GET_TRIP_WITHOUT_AUTH = gql`
  query ($id: String!) {
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

export const GENERATE_TEMPLATE = gql`
  mutation ($input: GenerateTemplateInput!) {
    generateTemplate(input: $input) {
      id
      name
      locationEnd {
        id
        name
        lat
        lng
      }
      locationStart {
        id
        name
        lat
        lng
      }
      slot
      timeEnd
      timeStart
      type {
        id
        name
      }
      distance
    }
  }
`;

export const TRIPS_OF_ACCOUNT = gql`
  query ($input: String!) {
    tripsOfHost(input: $input) {
      id
      name
      thumbnail
      locationStart {
        name
      }
      locationEnd {
        name
      }
      timeEnd
      timeStart
      host {
        profile {
          fullName
        }
      }
      slot
      joined
      distance
    }
  }
`;
