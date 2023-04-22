import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginRoute } from "./routes/route-name";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate(`/${LoginRoute}`);
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
