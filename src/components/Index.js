import React from 'react';
import Footer from './Footer'
const divStyle = {
  color: 'red'
}

function MyInfo() {
  return (
    <>
    <h1 style={divStyle}>My name is Danny Romero.</h1>
    <p>I am a full stack developer from San Diego, CA. I have completed the LEARN Academy bootcamp and an internship with HoursLogger.</p>
    <p>My top 3 vacation spots would be:</p>
    <ol>
      <li>Hawaii</li>
      <li>Spain</li>
      <li>New Zealand</li>
    </ol>
    <Footer/>
    </>
  )
}

export default MyInfo