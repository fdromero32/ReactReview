import { useState } from "react";

function useToggler() {
  const [toggler, setToggler] = useState(false);

  function toggleStatus() {
    setToggler((prevToggle) => !prevToggle);
  }
  return { toggler, toggleStatus };
}

export default useToggler;

// Favorite.js //
import React from "react";
import useToggler from "./useToggler";

function Favorite() {
  const { isToggledOn, toggle } = useToggler(false);

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isToggledOn ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default Favorite;

import React from "react";
import useToggler from "./useToggler";

function Menu(props) {
  const [ isToggledOn, toggle ] = useToggler(true);
  
  return (
    <div>
      <button onClick={toggle}>{isToggledOn ? "Hide" : "Show"} Menu </button>
      <nav style={{ display: isToggledOn ? "block" : "none" }}>
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
  );
}

export default Menu;
