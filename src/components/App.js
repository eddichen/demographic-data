import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fields: [],
      selectedField: "",
      items: []
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
    this.getData(event.target.value);
  }

  getData(activeField) {
    fetch(`https://birdie-test-thibault-henry.herokuapp.com/api/${activeField}`)
      .then(res => res.json())
      .then(
        result => {
          let sortedData = this.sortByCount(result);
          this.setState({
            items: sortedData
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  sortByCount(data) {
    const unsortedData = data;
    return unsortedData.sort((a, b) => {
      return b.count - a.count;
    });
  }

  render() {
    const { error, isLoaded, fields, items } = this.state;

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

          <table>
            <tr>
              <td>#</td>
              <td>Field</td>
              <td>Count</td>
              <td>Average Age</td>
            </tr>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.field}</td>
                <td>{item.count}</td>
                <td>{item.average_age}</td>
              </tr>
            ))}
          </table>
        </div>
      );
    }
  }
}

export default App;
