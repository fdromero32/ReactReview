import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      userName: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`You typed ${this.state.fullName}`);
    this.setState({
      fullName: "",
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="fullname">Full Name</label>
          <input
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
          <input
            name="userName"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Add!</button>
        </form>
      </>
    );
  }
}

export default App;
