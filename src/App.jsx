import { Outlet } from "react-router-dom"
import SideBar from "./containers/sidebar/sidebar.container"

function App() {
  return (
    <div>
      <Outlet />
      <SideBar />
    </div>
  )
}

export default App
