import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import {
  RootRoute,
  LoginRoute,
  RegisterRoute,
  HobbiesRoute,
  ProfileRoute
} from './route-name'
import {
  Login,
  Register,
  Hobbies,
  Profile
} from '../pages'
import App from '../App'
import {
  MainLayout
} from '../layouts'

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path={RootRoute} element={<App />}>
      <Route path={LoginRoute} element={<Login />} />
      <Route path={RegisterRoute} element={<Register />} />
      <Route path={HobbiesRoute} element={<Hobbies />} />
      <Route element={<MainLayout />}>
        <Route path={ProfileRoute.name} element={<Profile />} />
      </Route>
    </Route>
  )
)
