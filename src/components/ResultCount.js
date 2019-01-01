import React, { Component } from "react";

class ResultCount extends Component {
  displayResultCount(resultCount) {
    if (resultCount > 100) {
      return `Showing 100 of ${resultCount} results`;
    } else {
      return `Showing all ${resultCount} results`;
    }
  }

  render() {
    return <p>{this.displayResultCount(this.props.resultCount)}</p>;
  }
}

export default ResultCount;
