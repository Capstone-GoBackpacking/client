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
            path={ProfileRoute.childs.trips}
            element={<ProfileMyTrips />}
          />
          <Route path={ProfileRoute.childs.shop} element={<ProfileShop />} />
        </Route>
        <Route path={CreateTripRoute} element={<CreateTrip />} />
        <Route path={TripsRoute} element={<Trips />} />
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
      </Route>
    </Route>
  )
);
