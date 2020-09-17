import React from "react";
import Example from "./Example";

function App() {
  return (
    <div>
      <Example
        render={function (array) {
          return (
            <h1>
              {array.map((value) => {
                return value + 100;
              })}
            </h1>
          );
        }}
      />
    </div>
  );
}

export default App;

// Child Example Component

import React from "react";

function Example(props) {
  return <div>{props.render([1, 2, 3])}</div>;
}

export default Example;


// Example 2:
import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(bool, number) {
                    return (
                        <div>
                            <h1>{number}</h1>
                            <h1>{bool ? "true" : "false"}</h1>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default App

import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true, 42)}
        </div>
    )
}

export default Example