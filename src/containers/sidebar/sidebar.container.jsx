import { IoIosHome } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { HiShoppingCart, HiLocationMarker } from "react-icons/hi";
import { PanelMenu } from "primereact/panelmenu";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const sidebarOptions = [
    {
      label: "Home",
      icon: IoIosHome,
      command: () => navigate("/"),
    },
    {
      label: "Trips",
      icon: FaWalking,
      command: () => navigate("/trips"),
    },
    {
      label: "Market",
      icon: HiShoppingCart,
    },
    {
      label: "Locations",
      icon: HiLocationMarker,
      command: () => navigate("/locations"),
    },
  ];

  return (
    <div className="relative w-40">
      <div className="fixed">
        <PanelMenu model={sidebarOptions} />
      </div>
    </div>
  );
};

export default SideBar;
