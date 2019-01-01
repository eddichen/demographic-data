import React, { Component } from "react";
import ResultCount from "./ResultCount";
import styled from "styled-components";

const ResultContainer = styled.div`
  text-align: center;
`;

const ResultTable = styled.table``;

class ResultsTable extends Component {
  render() {
    return (
      <ResultContainer>
        <ResultCount resultCount={this.props.resultCount} />
        <ResultTable>
          <tr>
            <td>#</td>
            <td>Field</td>
            <td>Count</td>
            <td>Average Age</td>
          </tr>
          {this.props.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.field}</td>
              <td>{item.count}</td>
              <td>{item.average_age}</td>
            </tr>
          ))}
        </ResultTable>
      </ResultContainer>
    );
  }
}

export default ResultsTable;
