import React, { Component } from "react";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: {
        width: 10,
        height: 40,
        color: "orange",
      },
    };
  }
  render() {
    const boxes = this.state.boxes.map((box) => {
      <Box width={box.width} height={box.height} color={box.color} />;
    });
    return (
      <>
        <h1>Color Box Creator!</h1>
        {boxes}
      </>
    );
  }
}

export default BoxList;
