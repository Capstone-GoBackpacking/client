import { Outlet } from "react-router-dom"
import { HobbiesContainer } from "./containers"

function App() {
  return (
    <div>
      <Outlet />
      <HobbiesContainer />
    </div>
  )
}

export default App
