import fetch from "cross-fetch";

//select a field
export function selectedField(selectedField) {
  return {
    type: "SET_SELECTED_FIELD",
    selectedField
  };
}
//request fields
export function requestFields() {
  return {
    type: "REQUEST_FIELDS"
  };
}
//receive fields
export function receiveFields(fields, error) {
  return {
    type: "RECEIVE_FIELDS",
    fields,
    error
  };
}
//fetch fields
export function fetchFields() {
  return function(dispatch) {
    dispatch(requestFields());
    return fetch(`https://birdie-test-thibault-henry.herokuapp.com/api/fields`)
      .then(
        response => {
          return response.json();
        },
        error => {
          return error;
        }
      )
      .then(json => dispatch(receiveFields(json)))
      .catch(error => dispatch(receiveFields([], error)));
  };
}
//request field data
export function requestFieldData() {
  return {
    type: "REQUEST_FIELD_DATA"
  };
}
//receive fields
export function receiveFieldData(items, error) {
  return {
    type: "RECEIVE_FIELD_DATA",
    items,
    error
  };
}
//fetch field data
export function fetchFieldData(field) {
  return function(dispatch) {
    dispatch(requestFieldData());
    return fetch(
      `https://birdie-test-thibault-henry.herokuapp.com/api/${field}`
    )
      .then(
        response => {
          return response.json();
        },
        error => {
          return error;
        }
      )
      .then(json => {
        dispatch(receiveFieldData(json));
        //let sortedData = this.sortByCount(result);
        //let trimmedData = this.trimResults(sortedData, result.length);
        // this.setState({
        //   items: trimmedData,
        //   resultDataCount: result.length
        // });
      })
      .catch(error => dispatch(receiveFieldData({}, error)));
  };
}
