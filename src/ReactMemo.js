// Grandparent Functional Component
import React from "react";
import Parent from "./Parent";

// alternate way of writing React.memo()
export default React.memo(function Grandparent() {
  return (
    <div>
      <p>I'm a GrandParent Component</p>
      <Parent />
      <Parent />
    </div>
  );
});

// Parent Functional Component
import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <p>I'm a Parent Component</p>
      <Child />
      <Child />
    </div>
  );
}

export default Parent;

// Child Functional Component
import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div>
      <p>I'm a Child Component</p>
      <GrandChild />
      <GrandChild />
    </div>
  );
}

export default Child;

// Grandchild Functional Component
import React from "react";

function GrandChild() {
  return (
    <div>
      <p>I'm a Grandchild Component</p>
    </div>
  );
}

export default GrandChild;
