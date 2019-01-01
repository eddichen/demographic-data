import React, { Component } from "react";

import FieldSelect from "./FieldSelect";
import ResultsTable from "./ResultsTable";
import store from "../store";
import {
  fetchFields,
  selectedField,
  fetchFieldData
} from "../actions/actionCreators";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    store.dispatch(selectedField(event.target.value));
    store.dispatch(fetchFieldData(event.target.value));
  }

  componentDidMount() {
    store.dispatch(fetchFields());
  }

  render() {
    const error = this.props.error;
    const isFetching = this.props.isFetching;

    if (isFetching) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <FieldSelect
            fields={this.props.fields}
            selectedField={this.props.selectedField}
            handleChange={this.handleChange}
          />
          {this.props.items.length ? (
            <ResultsTable
              items={this.props.items}
              resultCount={this.props.resultCount}
            />
          ) : null}
        </div>
      );
    }
  }
}

export default Main;
