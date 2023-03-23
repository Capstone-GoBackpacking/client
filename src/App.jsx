import { Outlet } from "react-router-dom"
import RegisterContainer from "./containers/RegisterContainer/RegisterContainer"

function App() {
  return (
    <div>
      <Outlet />
      <RegisterContainer />
    </div>
  )
}

export default App
