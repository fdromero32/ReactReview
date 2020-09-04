import React, { Component } from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it, ✔
2. Have state keep track of whether the user is logged in or not ✔
3. Add a button that logs the user in/out ✔
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  handleChange = () => {
    let updateClick = !this.state.isLoggedIn;
    this.setState({ isLoggedIn: updateClick });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn && <h1>You are logged in! </h1>}
        {!this.state.isLoggedIn && <h1>You logged out! </h1>}
        <button type="button" onClick={this.handleChange}>
          {this.state.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </>
    );
  }
}

export default App;
