import { FaCarSide } from "react-icons/fa";
import {
  AiFillCamera,
  AiTwotoneShop,
  AiOutlinePullRequest,
} from "react-icons/ai";
import { ProfileInfo, Navbar } from "src/containers";
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
      path: `/profile/${profileId}/trips`,
      status: auth?.currentAccount.id === profileId ? "enable" : "disable",
    },
    {
      label: "Images",
      icon: AiFillCamera,
      path: `/profile/${profileId}/images`,
      status: "enable",
    },
    {
      label: "Shop",
      icon: AiTwotoneShop,
      path: `/profile/${profileId}/shop`,
      status: "disable",
    },
    {
      label: "Request",
      icon: AiOutlinePullRequest,
      path: `/profile/${profileId}/requests`,
      status: auth?.currentAccount.id === profileId ? "enable" : "disable",
    },
  ];

  return (
    <div id="profile" className="m-auto w-11/12">
      {account && (
        <ProfileInfo
          isMy={auth.currentAccount?.id === profileId}
          fullName={account.account.profile.fullName}
          firstName={account.account.profile.firstName}
          lastName={account.account.profile.lastName}
          email={account.account.email}
          birthday={account.account.profile.birthday}
          avatar={account.account.profile.avatar}
          star={account.account.star}
          gender={account.account.profile.genderId}
          hobbies={account.account.hobbies}
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
