import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;

import React from "react";

function Conditional(props) {
  return (
    <div>
      <h1>Navbar</h1>
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Some cool stuff about conditional rendering</h1>
      )}
      <h1>Footer</h1>
    </div>
  );
}

export default Conditional;
