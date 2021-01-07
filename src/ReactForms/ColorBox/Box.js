import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <>
        <div
          style={{
            height: `${this.props.heights}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button>X</button>
      </>
    );
  }
}

export default Box;
