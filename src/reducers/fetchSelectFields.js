function fetchSelectFields(
  state = {
    isFetching: false,
    fields: []
  },
  action
) {
  switch (action.type) {
    case "REQUEST_FIELDS":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "RECEIVE_FIELDS":
      return Object.assign({}, state, {
        isFetching: false,
        fields: action.fields
      });
    default:
      return state;
  }
}

export default fetchSelectFields;
