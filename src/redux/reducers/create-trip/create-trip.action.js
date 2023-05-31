export const setValue = (state, action) => {
  const { key, value } = action.payload;
  state[key] = value;
};

export const resetValue = (state, action) => {
  state = {
    type: "",
    from: "",
    to: "",
    start: "",
    end: "",
    name: "",
    slot: null,
    description: "",
    thumbnail: "",
  };
};
