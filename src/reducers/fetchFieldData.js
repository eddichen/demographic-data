function fetchFieldData(
  state = {
    isFetching: false,
    items: [],
    resultCount: 0,
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
        resultCount: action.resultCount,
        error: action.error
      });
    default:
      return state;
  }
}

export default fetchFieldData;
