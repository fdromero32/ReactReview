//Correct Link: "https://swapi.dev/api/people/4/

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/4/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 
          loading: false,
          character: data });
      });
  }

  render() {
    return (
      <>
        {this.state.loading ? "loading..." : this.state.character.name}
      </>
    );
  }
}

export default App;
