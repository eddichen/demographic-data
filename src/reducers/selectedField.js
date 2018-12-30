function selectedField(state = [], action, index) {
  switch (action.type) {
    case "SET_SELECTED_FIELD":
      console.log("SET_SELECTED_FIELD");
      return [
        ...state.slice(0, index),
        { ...state[index], selectedField: action.selectedField },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default selectedField;
