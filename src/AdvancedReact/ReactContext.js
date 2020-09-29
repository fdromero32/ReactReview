// App.js
import React from "react";

import Header from "./Header";
import Button from "./Button";

function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default App;

// Button.js //////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import ThemeContext from "./themeContext";

class Button extends Component {
  render() {
    const theme = this.context;
    return <button className={`${theme}-theme`}>Switch Theme</button>;
  }
}

Button.contextType = ThemeContext;

export default Button;

// Header.js ///////////////////////////////////////////////////////////////////
import React, { Component } from "react";
import ThemeContext from "./themeContext";

class Header extends Component {
  static contextType = ThemeContext
  render() {
    const theme = this.context;
    return (
      <header className={`${theme}-theme`}>
        <h2>{`${theme} theme`}</h2>
      </header>
    );
  }
}

export default Header;

// index.js ////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);

// themeContext.js
import React from "react";
const ThemeContext = React.createContext();
export default ThemeContext;
