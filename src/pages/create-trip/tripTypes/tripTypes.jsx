import { useDispatch, useSelector } from "react-redux";
import TripType from "src/components/tripType/tripType.component"
import { setValue } from "src/redux/reducers/create-trip/create-trip.reducer";
import createTripSelector from "src/redux/reducers/create-trip/create-trip.selector";

const TripTypes = () => {
  const { type } = useSelector(createTripSelector)
  const dispatch = useDispatch()

  const onSelected = (id) => {
    dispatch(setValue({ key: 'type', value: id }))
    setSelectedType(id)
  }
  const data = [
    {
      id: 1,
      name: 'Adventure',
      thumbnail: 'https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg'
    },
    {
      id: 2,
      name: 'Sport',
      thumbnail: 'https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg'
    },
    {
      id: 3,
      name: 'Culture',
      thumbnail: 'https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg'
    },
    {
      id: 4,
      name: 'Culture',
      thumbnail: 'https://www.shutterstock.com/image-vector/url-shortener-man-pushes-address-600w-2201694049.jpg'
    }
  ]

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h1 className="font-bold mb-5">Trip Types</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {
          data.map(item => <TripType
            key={item.id}
            id={item.id}
            selected={type === item.id}
            onSelected={onSelected}
            name={item.name}
            thumbnail={item.thumbnail}
          />)
        }
      </div>
    </div>
  )
}

export default TripTypes