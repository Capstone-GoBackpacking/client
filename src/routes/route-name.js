export const RootRoute = "/";
export const LoginRoute = "login";
export const RegisterRoute = "register";
export const HobbiesRoute = "hobbies";
export const CreateTripRoute = "create-trip";
export const ProfileRoute = {
  path: "profile/:profileId",
  childs: {
    images: "images",
    trips: "trips",
    shop: "shop",
  },
};
export const TripsRoute = "trips";
export const LocationsRoute = "locations";
export const LocationDetailRoute = {
  path: "locations/:locationId",
  childs: {
    images: "images",
    services: "services",
    reviews: "reviews",
  },
};
export const TripDetailRoute = {
  path: "trips/:tripId",
  childs: {
    images: "images",
    discussion: "discussion",
  },
};
export const GenerateTripRoute = "generate-trip";
