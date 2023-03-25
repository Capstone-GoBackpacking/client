import { Outlet } from "react-router-dom"
import LoginContainer from "./containers/login/login.container"

function App() {
  return (
    <div>
      <Outlet />
      <LoginContainer />
    </div>
  )
}

export default App
