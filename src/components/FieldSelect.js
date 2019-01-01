import React, { Component } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
`;
const StyledSelect = styled.select`
  padding 5px 6px;
  width: 130%;
  border: none;
  background: transparent;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

class FieldSelect extends Component {
  render() {
    return (
      <SelectWrapper>
        <StyledSelect
          value={this.props.selectedField.value}
          onChange={this.props.handleChange}
        >
          <option value="">select a field</option>
          {this.props.fields.map((field, index) => (
            <option key={index}>{field}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    );
  }
}

export default FieldSelect;
