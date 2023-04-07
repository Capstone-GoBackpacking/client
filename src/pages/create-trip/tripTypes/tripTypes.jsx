import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "src/components";
import TripType from "src/components/tripType/tripType.component";
import { TRIPTYPES } from "src/graphql/trip-types";
import { setValue } from "src/redux/reducers/create-trip/create-trip.reducer";
import createTripSelector from "src/redux/reducers/create-trip/create-trip.selector";

const TripTypes = () => {
  const { data, loading, error } = useQuery(TRIPTYPES);
  const { type } = useSelector(createTripSelector);
  const dispatch = useDispatch();

  const onSelected = (id) => {
    dispatch(setValue({ key: "type", value: id }));
    setSelectedType(id);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h1 className="font-bold mb-5">Trip Types</h1>
      {loading && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.types &&
          data.types.map((item) => (
            <TripType
              key={item.id}
              id={item.id}
              selected={type === item.id}
              onSelected={onSelected}
              name={item.name}
              thumbnail={item.thumbnail}
            />
          ))}
      </div>
    </div>
  );
};

export default TripTypes;
