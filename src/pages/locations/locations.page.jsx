import { LocationListingContainer, MyMap } from "src/containers";
import { useQuery, useLazyQuery } from "@apollo/client";
import { LOCATIONS, SEARCH_LOCATION } from "src/graphql/locations";
import { Marker } from "react-leaflet";
import { TAGS } from "src/graphql/tags";
import { useEffect, useState } from "react";

const Locations = () => {
  const [getLocations] = useLazyQuery(LOCATIONS);
  const { data: tags } = useQuery(TAGS);
  const [search] = useLazyQuery(SEARCH_LOCATION);
  const [locations, setLocations] = useState([]);
  const [searchState, setSearchState] = useState({
    name: "",
    tagIds: [],
  });

  const nameHandler = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setSearchState((state) => ({
        ...state,
        name: e.target.value,
      }));
    }
  };
  console.log(searchState);

  const selectTagHandler = async (id) => {
    if (searchState.tagIds.includes(id)) {
      setSearchState((state) => ({
        ...state,
        tagIds: state.tagIds.filter((tag) => tag !== id),
      }));
    } else {
      setSearchState((state) => ({
        ...state,
        tagIds: [...state.tagIds, id],
      }));
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await search({
        variables: {
          input: searchState,
        },
      });
      setLocations(data.searchLocation);
    })();
  }, [searchState]);

  useEffect(() => {
    const init = async () => {
      const { data } = await getLocations();
      if (data?.locations) {
        setLocations(data.locations);
      }
    };
    init();
  }, []);

  return (
    <div className="w-11/12 m-auto h-screen flex flex-col">
      <div className="flex-1">
        <MyMap>
          {locations &&
            locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
              ></Marker>
            ))}
        </MyMap>
      </div>
      {locations && (
        <LocationListingContainer
          locations={locations}
          tags={tags?.tags}
          onSelectTag={selectTagHandler}
          onChangeName={nameHandler}
        />
      )}
    </div>
  );
};

export default Locations;
