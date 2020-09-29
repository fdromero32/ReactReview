// https://scrimba.com/g/greacthooks

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "",
    };
  }

  increment = () => {
    let plusOne = this.state.count + 1;
    this.setState({ count: plusOne });
  };
  decrement = () => {
    let minusOne = this.state.count - 1;
    this.setState({ count: minusOne });
  };

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
      </div>
    );
  }
}

export default App;

// First Run
// >Render
// >Mounted
// Clicking on the Increment.
// >Render
// >Did Update
