import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        {this.props.completed && (
          <p style={{ textDecoration: "line-through" }}>{this.props.text}</p>
        )}
        {!this.props.completed && (
          <p style={{ color: "green" }}>{this.props.text}</p>
        )}
      </div>
    );
  }
}

export default TodoItem;
