import { InputText } from "primereact/inputtext";
import { CiSearch } from "react-icons/ci";
import { LocationStory } from "src/components";

const Trips = () => {
  const data = [
    {
      id: 1,
      thumbnail:
        "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PPrKyjjr_0QAX8NuSDq&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDVGvzd1h_OjXvJZ9cZNsKdlYBtPq2qg3n3L32rgpSOrQ&oe=6435D08A",
      from: "lien chieu, da nang",
      to: "quang tri, quang tri",
      timeStart: "1/1/2001 1:1",
      timeEnd: "1/1/2001 1:1",
      host: "Viet Anh Le",
      slot: 4,
      joined: 2,
      verified: "enable",
      direction: "vertical",
      distance: 200,
    },
    {
      id: 2,
      thumbnail:
        "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PPrKyjjr_0QAX8NuSDq&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDVGvzd1h_OjXvJZ9cZNsKdlYBtPq2qg3n3L32rgpSOrQ&oe=6435D08A",
      from: "lien chieu, da nang",
      to: "quang tri, quang tri",
      timeStart: "1/1/2001 1:1",
      timeEnd: "1/1/2001 1:1",
      host: "Viet Anh Le",
      slot: 4,
      joined: 2,
      verified: "enable",
      direction: "vertical",
      distance: 200,
    },
    {
      id: 3,
      thumbnail:
        "https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mdn7ABQQhkwAX_l3Rcf&_nc_ht=scontent.fdad7-1.fna&oh=00_AfC9Z-16fHeoGM0l2_UXpAY9JSWA4w_uZG8OPuCWSodpmw&oe=6435D08A",
      from: "lien chieu, da nang",
      to: "quang tri, quang tri",
      timeStart: "1/1/2001 1:1",
      timeEnd: "1/1/2001 1:1",
      host: "Viet Anh Le",
      slot: 4,
      joined: 2,
      verified: "enable",
      direction: "vertical",
      distance: 200,
    },
    {
      id: 4,
      thumbnail:
        "https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mdn7ABQQhkwAX_l3Rcf&_nc_ht=scontent.fdad7-1.fna&oh=00_AfC9Z-16fHeoGM0l2_UXpAY9JSWA4w_uZG8OPuCWSodpmw&oe=6435D08A",
      from: "lien chieu, da nang",
      to: "quang tri, quang tri",
      timeStart: "1/1/2001 1:1",
      timeEnd: "1/1/2001 1:1",
      host: "Viet Anh Le",
      slot: 4,
      joined: 2,
      verified: "enable",
      direction: "vertical",
      distance: 200,
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="font-bold mb-2">
            Hello, Viet Anh Le!
          </h2>
          <span>Welcome back and explore the world</span>
        </div>
        <div className="flex items-center">
          <CiSearch className="h-6 w-6 mr-4" />
          <InputText className="pt-1 w-96" />
        </div>
      </div>
      <div className="flex justify-around mt-8">
        {data.map((location) => {
          return (
            <LocationStory
              key={location.id}
              thumbnail={location.thumbnail}
              to={location.to}
              slot={location.slot}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trips;
