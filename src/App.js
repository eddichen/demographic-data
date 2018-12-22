import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fields: [],
      selectedField: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://birdie-test-thibault-henry.herokuapp.com/api/fields")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            fields: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange(event) {
    this.setState({ selectedField: event.target.value });
    this.returnData(event.target.value);
  }

  returnData(activeField) {
    fetch(`https://birdie-test-thibault-henry.herokuapp.com/api/${activeField}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            data: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, fields } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <select value={this.state.selectedField} onChange={this.handleChange}>
            <option value="">select a field</option>
            {fields.map((field, index) => (
              <option key={index}>{field}</option>
            ))}
          </select>
        </div>
      );
    }
  }
}

export default App;
