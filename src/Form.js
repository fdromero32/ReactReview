import React, { Component } from "react";
import FormComponent from './FormComponent'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "Hawaii",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const keys = Object.keys(this.state);
    const values = Object.values(this.state);
    let txt = ``;
    keys.forEach((k, n) => {
      txt = txt + `${k}: ${values[n]}\n`;
    });
    alert(txt);
  }

  render() {
    return(
      <FormComponent 
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}

export default Form;
