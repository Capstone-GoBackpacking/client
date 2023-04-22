export const setValue = (state, action) => {
  const { key, value } = action.payload;
  state[key] = value;
};
