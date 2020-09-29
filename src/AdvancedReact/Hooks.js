// Class Based Component:

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }

  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
      </div>
    );
  }
}

export default App;

// Functional Component:
import React, { useState } from "react";

function App() {
  const [state, setstate] = useState("yes");
  return (
    <>
      <h1>Is state important to know? {state}</h1>
    </>
  );
}

// Example 2: Using useState()

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Change!</button>
      <button onClick={decrement}>Change!</button>
    </div>
  );
}

export default App;

// Complex State Example /////////////////////////////////////////////
import React, { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });
  const [contactsData, setContactsData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevData) => {
      return {
        ...prevData,
        // will copy over all properties from the previous input data and then replace whichever one we are currently working on with the updated value
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  const contacts = contactsData.map((contact) => (
    <h2 key={contact.firstName + contact.lastName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {contacts}
    </>
  );
}

export default App;
