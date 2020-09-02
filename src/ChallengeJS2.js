import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App(){
  return(
    <>
      <NavBar/>
      <MainContent />
      <Footer />
    </>
  )
}

export default App

// ReactDOM.render(<App />, document.getElementById('root'))

