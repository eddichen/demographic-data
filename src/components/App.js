import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchFields,
  receiveFields,
  requestFields,
  selectedField,
  fetchFieldData
} from "../actions/actionCreators";

import Main from "./Main";

function mapStateToProps(state) {
  return {
    fields: state.fetchSelectFields.fields,
    error: state.fetchSelectFields.error,
    isFetching: state.fetchSelectFields.isFetching,
    selectedField: state.selectedField,
    items: state.fetchFieldData.items,
    resultCount: state.fetchFieldData.resultCount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    fetchFields,
    requestFields,
    receiveFields,
    selectedField,
    fetchFieldData,
    dispatch
  );
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
