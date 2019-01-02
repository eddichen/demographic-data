import React, { Component } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 0px;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  padding 5px 6px;

  @media (min-width: 48em) {
    width: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #666;
  }

  select {
    width: 130%;
    border: none;
    background: transparent;
    font-size: 24px;
    font-family: "Courier New", Courier, monospace;
  
    &:focus {
      outline: none;
    }
  }
`;

class FieldSelect extends Component {
  render() {
    return (
      <SelectWrapper>
        <select
          value={this.props.selectedField.value}
          onChange={this.props.handleChange}
        >
          <option value="">select a field</option>
          {this.props.fields.map((field, index) => (
            <option key={index}>{field}</option>
          ))}
        </select>
      </SelectWrapper>
    );
  }
}

export default FieldSelect;
