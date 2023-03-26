import { Outlet } from "react-router-dom"
import { ProfileContainer } from "./containers"

function App() {
  return (
    <div>
      <Outlet />
      <ProfileContainer />
    </div>
  )
}

export default App
