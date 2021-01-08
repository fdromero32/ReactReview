import React from "react";
import "h8k-components";
import { SlideData } from "./components/SlideData";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App() {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides slides={SlideData} />
      </div>
    </div>
  );
}

export default App;
