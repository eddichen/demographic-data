import fetch from "cross-fetch";

//select a field
export function selectedField(selectedField, index) {
  return {
    type: "SET_SELECTED_FIELD",
    selectedField,
    index
  };
}
//request fields
export function requestFields() {
  return {
    type: "REQUEST_FIELDS"
  };
}
//receive fields
export function receiveFields(fields) {
  return {
    type: "RECEIVE_FIELDS",
    fields
  };
}

export function fetchFields() {
  return function(dispatch) {
    dispatch(requestFields());
    return fetch(`https://birdie-test-thibault-henry.herokuapp.com/api/fields`)
      .then(
        response => {
          return response.json();
        },
        error => console.log("An error occurred", error)
      )
      .then(json => dispatch(receiveFields(json)));
  };
}
