import axios from "axios";
import { GET_LOCATION_STRING } from "src/graphql/locations";

export const targetLocation = (state, action) => {
  state.isFavorited = action.payload.isFavoriting;
  state.target = action.payload.getLocationById;
};

export const toggleFavorite = (state, action) => {
  state.isFavorited = action.payload;
};

export const targetLocationAsync = async (locationId, _thunkAPI) => {
  try {
    const response = await axios
      .get("http://localhost:3000/graphql", {
        query: GET_LOCATION_STRING,
        variables: {
          id: locationId,
        },
      })
      .then((res) => {
        const { data } = res.data;
        return data;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
};
