export const setValueForState = (setState) => {
  return (key, value) => {
    setState(state => ({ ...state, [key]: value }))
  }
}
