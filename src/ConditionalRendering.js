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

// Conditional Rendering Part 2:
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: []
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
              {/* EAZY PEAZY */}
                { this.state.unreadMessages.length >0 && <h2>You have {this.state.unreadMessages.length} unread messages! </h2>}
            </div>
        )
    }
}

export default App
