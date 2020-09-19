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

// Button.js
import React, { Component } from "react";
import ThemeContext from "./themeContext";

class Button extends Component {
  render() {
    return <button className="light-theme">Switch Theme</button>;
  }
}

export default Button;

// Header.js
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="light-theme">
        <h2>Light Theme</h2>
      </header>
    );
  }
}

export default Header;

// index.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// provider is right here. ThemeContext.Provider & ThemeContext.Consumer
const ThemeContext = React.createContext();

ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
