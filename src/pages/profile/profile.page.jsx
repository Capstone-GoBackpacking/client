import { FaCarSide } from "react-icons/fa";
import { AiFillCamera, AiTwotoneShop } from "react-icons/ai";
import { ProfileInfo, Navbar } from "src/containers";
import { ProfileRoute } from "src/routes/route-name";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ACCOUNT } from "src/graphql/accounts";
import { AUTH } from "src/graphql/auths";

const Profile = () => {
  const { profileId } = useParams();
  const { data: account } = useQuery(ACCOUNT, {
    variables: {
      input: profileId,
    },
  });
  const { data: auth } = useQuery(AUTH);

  const navItems = [
    {
      label: "My Trips",
      icon: FaCarSide,
      path: `/${ProfileRoute.path}/${ProfileRoute.childs.trips}`,
      status: auth?.currentAccount.id === profileId ? "enable" : "disable",
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
      {account && (
        <ProfileInfo
          fullName={account.account.profile.fullName}
          email={account.account.email}
          birthday={account.account.profile.birthday}
          avatar={account.account.profile.avatar}
          star={account.account.star}
        />
      )}
      <Navbar data={navItems.filter((item) => item.status === "enable")} />
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
