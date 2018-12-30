import React, { Component } from "react";

class FieldSelect extends Component {
  render() {
    return (
      <select
        value={this.props.selectedField.value}
        onChange={this.props.handleChange}
      >
        <option value="">select a field</option>
        {this.props.fields.map((field, index) => (
          <option key={index}>{field}</option>
        ))}
      </select>
    );
  }
}

export default FieldSelect;
