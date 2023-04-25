import { ImagesContainer } from "src/containers";

const Images = () => {
  const data = [
    {
      id: 1,
      name: "image",
      src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 2,
      name: "image",
      src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/336376986_535747728667790_1513162187171736584_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=nNkV3BD65gMAX_pfy2Z&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAYmj3401QgCUN376-reGGtfDjKD7lU7Sg0fRPbYMq75g&oe=64266774",
    },
    {
      id: 3,
      name: "image",
      src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 4,
      name: "image",
      src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/336376986_535747728667790_1513162187171736584_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=nNkV3BD65gMAX_pfy2Z&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAYmj3401QgCUN376-reGGtfDjKD7lU7Sg0fRPbYMq75g&oe=64266774",
    },
    {
      id: 5,
      name: "image",
      src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/336376986_535747728667790_1513162187171736584_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=nNkV3BD65gMAX_pfy2Z&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAYmj3401QgCUN376-reGGtfDjKD7lU7Sg0fRPbYMq75g&oe=64266774",
    },
  ];

  return (
    <div id="profile-images" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ImagesContainer data={data} />
    </div>
  );
};

export default Images;
