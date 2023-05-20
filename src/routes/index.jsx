import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  RootRoute,
  LoginRoute,
  RegisterRoute,
  HobbiesRoute,
  ProfileRoute,
  CreateTripRoute,
  TripsRoute,
  LocationsRoute,
  LocationDetailRoute,
  TripDetailRoute,
  GenerateTripRoute,
} from "./route-name";
import {
  Login,
  Register,
  Hobbies,
  Profile,
  ProfileImages,
  ProfileMyTrips,
  ProfileShop,
  CreateTrip,
  Trips,
  Locations,
  LocationDetail,
  LocationDetailImages,
  LocationDetailReviews,
  LocationDetailServices,
  TripDetail,
  TripDetailImages,
  TripDetailDiscussion,
  GenerateTrip,
  ProfileRequests,
} from "src/pages";
import App from "../App";
import { MainLayout } from "src/layouts";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path={RootRoute} element={<App />}>
      <Route path={LoginRoute} element={<Login />} />
      <Route path={RegisterRoute} element={<Register />} />
      <Route path={HobbiesRoute} element={<Hobbies />} />
      <Route element={<MainLayout />}>
        <Route path={ProfileRoute.path} element={<Profile />}>
          <Route
            path={ProfileRoute.childs.images}
            element={<ProfileImages />}
          />
          <Route
            index
            path={ProfileRoute.childs.trips}
            element={<ProfileMyTrips />}
          />
          <Route path={ProfileRoute.childs.shop} element={<ProfileShop />} />
          <Route
            path={ProfileRoute.childs.requests}
            element={<ProfileRequests />}
          />
        </Route>
        <Route path={CreateTripRoute} element={<CreateTrip />} />
        <Route index path={TripsRoute} element={<Trips />} />
        <Route path={LocationsRoute} element={<Locations />} />
        <Route path={LocationDetailRoute.path} element={<LocationDetail />}>
          <Route
            path={LocationDetailRoute.childs.images}
            element={<LocationDetailImages />}
          />
          <Route
            path={LocationDetailRoute.childs.reviews}
            element={<LocationDetailReviews />}
          />
          <Route
            path={LocationDetailRoute.childs.services}
            element={<LocationDetailServices />}
          />
        </Route>
        <Route path={TripDetailRoute.path} element={<TripDetail />}>
          <Route
            path={TripDetailRoute.childs.images}
            element={<TripDetailImages />}
          />
          <Route
            path={TripDetailRoute.childs.discussion}
            element={<TripDetailDiscussion />}
          />
        </Route>
        <Route path={GenerateTripRoute} element={<GenerateTrip />} />
      </Route>
    </Route>
  )
);
