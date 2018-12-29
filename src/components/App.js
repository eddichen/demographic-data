import React, { Component } from "react";
import FieldSelect from "./FieldSelect";
import ResultsTable from "./ResultsTable";
import ResultDataCount from "./ResultDataCount";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fields: [],
      selectedField: "",
      items: [],
      resultDataCount: 0
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
          let trimmedData = this.trimResults(sortedData, result.length);
          this.setState({
            items: trimmedData,
            resultDataCount: result.length
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

  trimResults(data, resultLength) {
    const fullResults = data;
    if (resultLength > 100) {
      let trimmedResults = [];

      for (let i = 0; i <= 99; i++) {
        trimmedResults.push(fullResults[i]);
      }
      return trimmedResults;
    }
    return fullResults;
  }

  render() {
    const { error, isLoaded } = this.state;

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
          <ResultDataCount resultDataCount={this.state.resultDataCount} />
          <ResultsTable items={this.state.items} />
        </div>
      );
    }
  }
}

export default App;
