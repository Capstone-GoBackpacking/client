import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import {
  RootRoute,
  LoginRoute,
  RegisterRoute
} from './route-name'
import {
  Login,
  Register
} from '../pages'
import App from '../App'

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path={RootRoute} element={<App />}>
      <Route path={LoginRoute} element={<Login />} />
      <Route path={RegisterRoute} element={<Register />} />
    </Route>
  )
)
