import React, { Component } from "react";
import FieldSelect from "./FieldSelect";
import ResultsTable from "./ResultsTable";
import Loading from "./Loading";
import store from "../store";
import {
  fetchFields,
  selectedField,
  fetchFieldData
} from "../actions/actionCreators";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Courier New", Courier, monospace;
    color: #1f1f1f;
    margin: 0 15px 30px;

    @media(min-width: 48em) {
      margin: 0 30px 60px;
    }
  }
`;

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
      return <Loading />;
    } else if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <GlobalStyle />
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
