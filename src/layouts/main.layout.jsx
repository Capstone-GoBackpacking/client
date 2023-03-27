import { Outlet } from "react-router-dom"
import SideBar from "../containers/sidebar/sidebar.container"

const MainLayout = () => {
  return (
    <div id="main-layout" className="flex w-full">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
