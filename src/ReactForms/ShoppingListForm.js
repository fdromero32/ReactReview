import React, { Component } from "react";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      qty: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="qty">Quantity: </label>
          <input
            name="qty"
            id="qty"
            value={this.state.qty}
            onChange={this.handleChange}
          />
          <button type="submit">Add Item!</button>
        </form>
      </>
    );
  }
}
