import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './ToDoApp'

import './styles.css'


class Basic extends Component {
  render(){
    return (
      <>
        <App />
      </>
    )
  }
}

export default Basic

ReactDOM.render(
    <Basic/>,
  document.getElementById('root')
);

