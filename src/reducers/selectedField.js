function selectedField(state = { value: "" }, action) {
  switch (action.type) {
    case "SET_SELECTED_FIELD":
      return Object.assign({}, state, {
        value: action.selectedField
      });
    default:
      return state;
  }
}

export default selectedField;
