import { Outlet } from "react-router-dom";
import { LocationListingContainer } from "./containers";

function App() {
  return (
    <div>
      <Outlet />
      <LocationListingContainer />
    </div>
  );
}

export default App;
