import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.completed} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TodoItem;

import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loadedData: todosData,
    };
  }

  render() {
    let todoComponent = this.state.loadedData.map((item) => (
      <TodoItem key={item.id} text={item.text} completed={item.completed} />
    ));

    return (
      <div className="todo-list">
        {todoComponent}
      </div>
    );
  }
}

export default App;
