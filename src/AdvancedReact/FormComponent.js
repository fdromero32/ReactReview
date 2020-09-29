import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={props.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          pattern="[0-9]*"
          value={props.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.gender === "Male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.gender === "Female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Non Binary"
            checked={props.gender === "Non Binary"}
            onChange={props.handleChange}
          />
          Non-Binary
        </label>

        <label>Choose your Destination:</label>
        <select
          value={props.destination}
          onChange={props.handleChange}
          name="destination"
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Ireland">Ireland</option>
          <option value="Srilanka">Sri Lanka</option>
        </select>
        <br />

        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.isVegan}
          />
          Vegan?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.isKosher}
          />
          Kosher?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.isLactoseFree}
          />
          Lactose Free?
        </label>
        <br />
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>
        Your name: {props.firstName} {props.lastName}
      </p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:
        <p>Vegan: {props.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.isLactoseFree ? "Yes" : "No"}</p>
      </p>
    </main>
  );
}

export default FormComponent