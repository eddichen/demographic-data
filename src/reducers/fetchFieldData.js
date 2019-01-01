function fetchFieldData(
  state = {
    isFetching: false,
    items: [],
    error: {}
  },
  action
) {
  switch (action.type) {
    case "REQUEST_FIELD_DATA":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "RECEIVE_FIELD_DATA":
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        error: action.error
      });
    default:
      return state;
  }
}

export default fetchFieldData;
