import { useState } from "react";
import { SideBarModule } from "src/components";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AUTH } from "src/graphql/auths";

const View = () => {
  const [target, setTarget] = useState(null);
  const [childs, setChilds] = useState([]);
  const navigate = useNavigate();
  const { data: auth } = useQuery(AUTH, {
    fetchPolicy: "network-only",
  });

  const modules = [
    {
      id: "1",
      key: "home",
      name: "Home",
      icon: "home.svg",
      hasChild: false,
      path: "/",
      status: "disable",
    },
    {
      id: "2",
      key: "trips",
      name: "Trips",
      icon: "trip.svg",
      hasChild: false,
      path: "trips",
      status: "enable",
    },
    {
      id: "3",
      key: "locations",
      name: "Locations",
      icon: "location.svg",
      hasChild: false,
      path: "locations",
      status: "enable",
    },
    {
      id: "4",
      key: "market",
      name: "Market",
      icon: "market.svg",
      hasChild: false,
      path: "market",
      status: "disable",
    },
    {
      id: 5,
      key: "profile",
      name: "Profile",
      icon: "profile.svg",
      hasChild: false,
      path: `profile/${auth?.currentAccount.id}`,
      status: auth ? "enable" : "disable",
    },
  ];

  const handleChangeTarget = (e) => {
    setTarget(e);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="fixed z-0 flex w-full opacity-100 transition-all duration-300 md:sticky md:top-0 md:h-screen md:w-auto md:min-w-min">
      <div className="flex flex-col py-4 pl-3 md:w-64 md:pl-8">
        <div className="py-2 pl-5 md:py-4">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="hidden w-32 md:block"
          />
        </div>
        <div className="flex-1 pr-3">
          {modules
            .filter((module) => module.status === "enable")
            .map((module) => (
              <SideBarModule
                target={target}
                key={module.id}
                ckey={module.key}
                name={module.name}
                icon={module.icon}
                hasChild={module.hasChild}
                childs={childs}
                onTarget={(e) => handleChangeTarget(e)}
                path={module.path}
              />
            ))}
        </div>
        {auth ? (
          <button
            className="flex items-center justify-center gap-2 rounded-sm bg-primary p-2 text-white"
            onClick={handleLogout}
          >
            <FiLogOut className="h-6 w-6" /> Logout
          </button>
        ) : (
          <button
            className="flex items-center justify-center gap-2 rounded-sm bg-lime-400 p-2 text-white"
            onClick={handleLogout}
          >
            <FiLogIn className="h-6 w-6" /> Login
          </button>
        )}
      </div>
    </div>
  );
};

export default View;
