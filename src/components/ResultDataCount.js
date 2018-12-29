import React, { Component } from "react";

class ResultDataCount extends Component {
  displayResultCount(resultCount) {
    if (resultCount > 100) {
      return `Showing 100 of ${resultCount} results`;
    } else {
      return `Showing all ${resultCount} results`;
    }
  }

  render() {
    return <p>{this.displayResultCount(this.props.resultDataCount)}</p>;
  }
}

export default ResultDataCount;
