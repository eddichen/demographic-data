import React, { Component } from "react";

class FieldSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select
        value={this.props.selectedField}
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
