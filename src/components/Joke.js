import React from "react"

function Joke(props) {
    return (
        <div>
          {/* Conditional rendering would be a different outcome uwu */}
            <h3 style={{display: !props.joke && "none"}}>Question: {props.joke}</h3>
            <h3 style={{color: !props.answer && "#888888"}}>Answer: {props.answer}</h3>
            <hr/>
        </div>
    )
}

// Not DRY but kind of what I was going for :

function Joke(prop){
  if (!prop.joke) {
      return(
          <div className="joke">
              <div className="que">Joke: {prop.answer}</div>
          </div>
      );        
  } else {
      return(
          <div className="joke">
              <div className="que">Joke: {prop.joke}</div>
              <div className="ans">Punchline: {prop.answer}</div>
          </div>
      );   
  }
}

export default Joke

export default Jokes

import React from 'react'
import ReactDOM from 'react-dom'

import Jokes from './components/Jokes.js'

function App(){
  return(
    <>
      <Jokes 
        joke="Why did the chicken cross the road?"
        answer='To get to the other side!'
      />
      <Jokes 
        joke="What is funnier than 24???"
        answer='25!!!!!'
      />
      <Jokes 
        joke="Why did the chicken go to prison?"
        answer='Crimes against humanity'
      />
      <Jokes 
        joke="Why do you call a sad cup of coffee?"
        answer='Depresso'
      />
      <Jokes 
        joke= ""
        answer='Ur ugly!'
      />      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))