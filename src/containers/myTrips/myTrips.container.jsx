import { Trip } from "src/components"

const MyTrips = () => {
  const data = [
    {
      id: 1,
      thumnail: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/328359056_871213953997390_1447654795604032275_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aoG7eXzP6tIAX_vOoeO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVekhCEOAwWJY_lx8TThrtRle16gq46p32Fg3boaGYig&oe=642A7CFE',
      from: 'location 1',
      to: 'location 2',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'enable'
    },
    {
      id: 2,
      thumnail: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/328359056_871213953997390_1447654795604032275_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aoG7eXzP6tIAX_vOoeO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVekhCEOAwWJY_lx8TThrtRle16gq46p32Fg3boaGYig&oe=642A7CFE',
      from: 'location 1',
      to: 'location 2',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'disable'
    },
    {
      id: 3,
      thumnail: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/328359056_871213953997390_1447654795604032275_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aoG7eXzP6tIAX_vOoeO&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVekhCEOAwWJY_lx8TThrtRle16gq46p32Fg3boaGYig&oe=642A7CFE',
      from: 'location 1',
      to: 'location 2  location location location',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'pending'
    }
  ]

  return (
    <div className="flex flex-col gap-y-4">
      {data.map(trip =>
        <Trip
          key={trip.id}
          id={trip.id}
          thumbnail={trip.thumbnail}
          from={trip.from}
          to={trip.to}
          timeStart={trip.timeStart}
          timeEnd={trip.timeEnd}
          host={trip.host}
          slot={trip.slot}
          joined={trip.joined}
          verified={trip.verified}
        />
      )}
    </div>
  )
}

export default MyTrips
