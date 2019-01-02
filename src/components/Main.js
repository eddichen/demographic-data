import React, { Component } from "react";
import FieldSelect from "./FieldSelect";
import ResultsTable from "./ResultsTable";
import store from "../store";
import {
  fetchFields,
  selectedField,
  fetchFieldData
} from "../actions/actionCreators";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 38px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: -2px;
  color: #ff7219;

  @media (min-width: 48em) {
    font-size: 50px;
  }
`;

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
          <PageTitle>Demographic Data</PageTitle>
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
