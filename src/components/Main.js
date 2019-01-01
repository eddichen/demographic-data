import React, { Component } from "react";

import FieldSelect from "./FieldSelect";
import ResultsTable from "./ResultsTable";
import ResultDataCount from "./ResultDataCount";
import store from "../store";
import {
  fetchFields,
  selectedField,
  fetchFieldData
} from "../actions/actionCreators";

class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   fields: [],
    //   selectedField: "",
    //   items: [],
    //   resultDataCount: 0
    // };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    store.dispatch(selectedField(event.target.value));
    store.dispatch(fetchFieldData(event.target.value));
  }

  componentDidMount() {
    store.dispatch(fetchFields());
  }

  sortByCount(data) {
    const unsortedData = data;
    return unsortedData.sort((a, b) => {
      return b.count - a.count;
    });
  }

  trimResults(data, resultLength) {
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

  render() {
    const error = this.props.error;
    const isFetching = this.props.isFetching;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isFetching) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <FieldSelect
            fields={this.props.fields}
            selectedField={this.props.selectedField}
            handleChange={this.handleChange}
          />
          {/* <ResultDataCount resultDataCount={this.state.resultDataCount} /> */}
          {this.props.items.length ? (
            <ResultsTable items={this.props.items} />
          ) : null}
        </div>
      );
    }
  }
}

export default Main;
