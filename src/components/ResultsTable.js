import React, { Component } from "react";
import ResultCount from "./ResultCount";
import styled from "styled-components";

const ResultContainer = styled.div`
  text-align: center;
`;

const StyledResultTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid #ccc;

  thead {
    td {
      font-size: 18px;
      padding: 20px;
    }
  }

  tbody {
    tr:nth-child(2n + 1) {
      td {
        background-color: #e6f7ed;
      }
    }
  }

  td {
    padding: 10px 20px;
  }
`;

class ResultsTable extends Component {
  render() {
    return (
      <ResultContainer>
        <ResultCount resultCount={this.props.resultCount} />
        <StyledResultTable>
          <thead>
            <tr>
              <td>#</td>
              <td>Count</td>
              <td>Field</td>
              <td>Average Age</td>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.field}</td>
                <td>{item.count}</td>
                <td>{item.average_age}</td>
              </tr>
            ))}
          </tbody>
        </StyledResultTable>
      </ResultContainer>
    );
  }
}

export default ResultsTable;
