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
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 2:
import React from "react";
import Example from "./Example";

function App() {
  return (
    <div>
      <Example
        render={function (bool, number) {
          return (
            <div>
              <h1>{number}</h1>
              <h1>{bool ? "true" : "false"}</h1>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;

import React from "react";

function Example(props) {
  return <div>{props.render(true, 42)}</div>;
}

export default Example;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reverting HOC to render props
import React, { Component } from "react";

class Toggler extends Component {
  state = {
    on: this.props.defaultOnValue,
  };

  static defaultProps = {
    defaultOnValue: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    <div>
      {this.props.render({
        on: this.state.on,
        toggle: this.toggle,
      })}
    </div>;
  }
}

export default Toggler;

// Favorite Component
import React, { Component } from "react";
import Toggler from "./Toggler";

function Favorite(props) {
  return (
    <Toggler
      render={({on, toggle}) => (
        <div>
          <h3>Click heart to favorite</h3>
          <h1>
            <span onClick={toggle}>{on ? "❤️" : "♡"}</span>
          </h1>
        </div>
      )}
    />
  );
}

export default Favorite;

// Menu Component
import React from "react";
import Toggler from "./Toggler";

function Menu(props) {
  return (
    <Toggler
      defaultOnValue={true}
      render={({on, toggle}) => (
        <div>
          <button onClick={toggle}> {on ? "Hide" : "Show"} Menu</button>
          <nav style={{ display: on ? "block" : "none" }}>
            <h6>Signed in as Coder123</h6>
            <p>
              <a>Your Profile</a>
            </p>
            <p>
              <a>Your Repositories</a>
            </p>
            <p>
              <a>Your Stars</a>
            </p>
            <p>
              <a>Your Gists</a>
            </p>
          </nav>
        </div>
      )}
    />
  );
}

export default Menu;
