import React, { Component } from "react";
import styled from "styled-components";

const StyledResult = styled.p`
  font-size: 18px;
`;

class ResultCount extends Component {
  displayResultCount(resultCount) {
    if (resultCount > 100) {
      return `Showing 100 of ${resultCount} results`;
    } else {
      return `Showing all ${resultCount} results`;
    }
  }

  render() {
    return (
      <StyledResult>
        {this.displayResultCount(this.props.resultCount)}
      </StyledResult>
    );
  }
}

export default ResultCount;
