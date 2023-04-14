// import { IoIosHome } from "react-icons/io";
// import { FaWalking } from "react-icons/fa";
// import { HiShoppingCart, HiLocationMarker } from "react-icons/hi";
// import { PanelMenu } from "primereact/panelmenu";
// import { useNavigate } from "react-router-dom";

// const SideBar = () => {
//   const navigate = useNavigate();

//   const sidebarOptions = [
//     {
//       label: "Home",
//       icon: IoIosHome,
//       command: () => navigate("/"),
//     },
//     {
//       label: "Trips",
//       icon: FaWalking,
//       command: () => navigate("/trips"),
//     },
//     {
//       label: "Market",
//       icon: HiShoppingCart,
//     },
//     {
//       label: "Locations",
//       icon: HiLocationMarker,
//       command: () => navigate("/locations"),
//     },
//   ];

//   return (
//     <div className="relative w-40">
//       <div className="fixed">
//         <PanelMenu model={sidebarOptions} />
//       </div>
//     </div>
//   );
// };

// export default SideBar;
import { useState } from "react";
import { SideBarModule } from "src/components";

const View = () => {
  const [target, setTarget] = useState(null);
  const [childs, setChilds] = useState([]);

  const modules = [
    {
      id: "1",
      key: "home",
      name: "Home",
      icon: "home.svg",
      hasChild: false,
      path: "/",
    },
    {
      id: "2",
      key: "trips",
      name: "Trips",
      icon: "trip.svg",
      hasChild: false,
      path: "trips",
    },
    {
      id: "3",
      key: "locations",
      name: "Locations",
      icon: "location.svg",
      hasChild: false,
      path: "locations",
    },
    {
      id: "4",
      key: "market",
      name: "Market",
      icon: "market.svg",
      hasChild: false,
      path: "market",
    },
  ];

  const handleChangeTarget = (e) => {
    setTarget(e);
  };

  return (
    <div className="fixed flex md:top-0 z-0 opacity-100 w-full transition-all duration-300 md:sticky md:h-screen md:w-auto md:min-w-min">
      <div className="md:w-64 pl-3 md:pl-8 pt-4 bg-gray-primary">
        <div className="pl-5 py-2 md:py-4">
          <img
            src="/images/typera_logo_color.png"
            alt="logo"
            className="hidden md:block"
          />
        </div>
        <div className="pr-3">
          {modules.map((module) => (
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
      </div>
    </div>
  );
};

export default View;
