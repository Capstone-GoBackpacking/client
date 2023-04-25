import { FaCarSide } from "react-icons/fa";
import { AiFillCamera, AiTwotoneShop } from "react-icons/ai";
import { ProfileInfo, Navbar } from "src/containers";
import { ProfileRoute } from "src/routes/route-name";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const navItems = [
    {
      label: "My Trips",
      icon: FaCarSide,
      path: `/${ProfileRoute.path}/${ProfileRoute.childs.trips}`,
      status: "enable",
    },
    {
      label: "Images",
      icon: AiFillCamera,
      path: `/${ProfileRoute.path}/${ProfileRoute.childs.images}`,
      status: "enable",
    },
    {
      label: "Shop",
      icon: AiTwotoneShop,
      path: `/${ProfileRoute.path}/${ProfileRoute.childs.shop}`,
      status: "enable",
    },
  ];

  return (
    <div id="profile" className="w-11/12 m-auto">
      <ProfileInfo />
      <Navbar data={navItems} />
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
