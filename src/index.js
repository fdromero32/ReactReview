import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MyInfo from './components/Index'


class Basic extends Component {
  render(){
    return (
      <>
        <MyInfo />
      </>
    )
  }
}

export default Basic
ReactDOM.render(
    <Basic/>,
  document.getElementById('root')
);

