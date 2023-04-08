import { Trip } from "src/components"

const MyTrips = () => {
  const data = [
    {
      id: 1,
      thumbnail: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mdn7ABQQhkwAX_l3Rcf&_nc_ht=scontent.fdad7-1.fna&oh=00_AfC9Z-16fHeoGM0l2_UXpAY9JSWA4w_uZG8OPuCWSodpmw&oe=6435D08A',
      from: 'location 1',
      to: 'location 2',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'enable',
      distance: 200
    },
    {
      id: 2,
      thumbnail: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mdn7ABQQhkwAX_l3Rcf&_nc_ht=scontent.fdad7-1.fna&oh=00_AfC9Z-16fHeoGM0l2_UXpAY9JSWA4w_uZG8OPuCWSodpmw&oe=6435D08A',
      from: 'location 1',
      to: 'location 2',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'disable',
      distance: 200
    },
    {
      id: 3,
      thumbnail: 'https://scontent.fdad7-1.fna.fbcdn.net/v/t39.30808-6/328586186_5840531159389702_6868248482827294478_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mdn7ABQQhkwAX_l3Rcf&_nc_ht=scontent.fdad7-1.fna&oh=00_AfC9Z-16fHeoGM0l2_UXpAY9JSWA4w_uZG8OPuCWSodpmw&oe=6435D08A',
      from: 'location 1',
      to: 'location 2  location location location',
      timeStart: '1/12001',
      timeEnd: '1/12/2001',
      host: 'Viet Anh Le',
      slot: 10,
      joined: 5,
      verified: 'pending',
      distance: 200
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
          distance={trip.distance}
        />
      )}
    </div>
  )
}

export default MyTrips
