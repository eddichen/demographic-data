import React, { Component } from "react";

class ResultsTable extends Component {
  render() {
    return (
      <table>
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
      </table>
    );
  }
}

export default ResultsTable;