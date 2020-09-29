import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { UserContextProvider } from "./userContext";

ReactDOM.render(
  <UserContextProvider value={"beepboopboop12"}>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);

// App.js //////////////////////////////////////////
import React from "react";

import Header from "./Header";
import { UserContextConsumer } from "./userContext";

function App() {
  return (
    <div>
      <Header />
      <main>
        <UserContextConsumer>
          {(user) => <p className="main">No new notifications, {user}! 🎉</p>}
        </UserContextConsumer>
      </main>
    </div>
  );
}

export default App;

// Header.js ///////////////////////////////////////////////////
import React from "react";
import { UserContextConsumer } from "./userContext";

function Header() {
  return (
    <div>
      <UserContextConsumer>
        {(user) => (
          <header>
            <p>Welcome, {user}!</p>
          </header>
        )}
      </UserContextConsumer>
    </div>
  );
}

export default Header;

// UserContext
import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    theme: "dark",
  };

  toggleTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  // toggleTheme = () => {
  //   this.setState(prevState => {
  //       return {
  //           theme: prevState.theme === "light" ? "dark" : "light"
  //       }
  //   })
  // }

  render() {
    return <Provider value={this.state.theme}>{this.props.children}</Provider>;
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
