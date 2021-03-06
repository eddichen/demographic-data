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
//receive field data
export function receiveFieldData(items, resultCount, error) {
  return {
    type: "RECEIVE_FIELD_DATA",
    items,
    resultCount,
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
        let sortedData = sortByCount(json);
        dispatch(
          receiveFieldData(trimResults(sortedData, json.length), json.length)
        );
      })
      .catch(error => dispatch(receiveFieldData({}, 0, error)));
  };
}

function sortByCount(data) {
  const unsortedData = data;
  return unsortedData.sort((a, b) => {
    return b.count - a.count;
  });
}

function trimResults(data, resultLength) {
  const fullResults = data;
  if (resultLength > 100) {
    let trimmedResults = [];

    for (let i = 0; i <= 99; i++) {
      trimmedResults.push(fullResults[i]);
    }
    return trimmedResults;
  }
  return fullResults;
}
