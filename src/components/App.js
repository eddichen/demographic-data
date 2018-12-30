import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchFields,
  receiveFields,
  requestFields,
  selectedField
} from "../actions/actionCreators";

import Main from "./Main";

function mapStateToProps(state) {
  return {
    fields: state.fetchSelectFields.fields,
    selectedField: state.selectedField
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    fetchFields,
    requestFields,
    receiveFields,
    selectedField,
    dispatch
  );
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
