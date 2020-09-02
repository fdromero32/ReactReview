import React, { Component } from "react";
import TodoItem from "./ToDoItem";
import todosData from "./ToDoData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadedData: todosData,
    };
  }

  newChange = (id) => {
    const update = this.state.loadedData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(update);
    this.setState({ loadedData: update });
  };

  render() {
    const todoComponent = this.state.loadedData.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        completed={item.completed}
        newChange={this.newChange}
      />
    ));

    return <div className="todo-list">{todoComponent}</div>;
  }
}

export default App;
