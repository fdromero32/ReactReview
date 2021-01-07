import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`You typed ${this.state.fullName}`);
    this.setState({
      fullName: "",
    });
  }

  handleChange(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  render() {
    return (
      <>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="fullname">Full Name</label>
          <input
            name="fullname"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
          <button>Add!</button>
        </form>
      </>
    );
  }
}

export default NameForm;
