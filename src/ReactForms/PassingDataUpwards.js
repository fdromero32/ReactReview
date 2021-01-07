import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "milk", qty: "2 gallons" },
        { name: "bread", qty: "2 loaves" },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  }

  render() {
    return (
      <>
        <h1>Shopping List</h1>
        <ShoppingListForm addItem={this.addItem} />
      </>
    );
  }
}

export default ShoppingList;
