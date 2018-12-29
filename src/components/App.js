import React, { Component } from "react";
import FieldSelect from "./FieldSelect";

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

    this.resultDataCount = 0;
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
          this.resultDataCount = result.length;
          let sortedData = this.sortByCount(result);
          let trimmedData = this.trimResults(sortedData);
          this.setState({
            items: trimmedData
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

  trimResults(data) {
    const fullResults = data;
    if (this.resultDataCount > 100) {
      let trimmedResults = [];

      for (let i = 1; i <= 100; i++) {
        trimmedResults.push(fullResults[i]);
      }
      return trimmedResults;
    }
    return fullResults;
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
          <FieldSelect
            fields={this.state.fields}
            selectedField={this.state.selectedField}
            handleChange={this.handleChange}
          />

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
          <p>{this.resultDataCount}</p>
        </div>
      );
    }
  }
}

export default App;
