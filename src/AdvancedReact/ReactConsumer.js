import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "./themeContext";

function Button(props) {
  return <button className={`${props.theme}-theme`}>Switch Theme</button>;
}
// Creates stability within component in case of incorrect prop being passed down using propTypes.
Button.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
};

Button.defaultProps = {
  theme: "light",
};

export default Button;

// Header.js
import React from "react";
import ThemeContext from "./themeContext";

function Header(props) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <header className={`${theme}-theme`}>
          <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;

// App.js: Incorporating Consumer in the parent componenet in the case that you don't want the child componenet to have the exact same styling everytime. i.e. customizing certain components using Consumer.
import React from "react";

import Header from "./Header";
import Button from "./Button";
import ThemeContext from "./themeContext";

function App() {
  return (
    <div>
      <Header />
      <ThemeContext.Consumer>
        {(theme) => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button theme="light" />
    </div>
  );
}

export default App;
