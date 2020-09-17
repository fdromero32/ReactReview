import React from 'react'

export function withFavoriteNumber(component) {
  const Component = component
  return function(props) {
    return (
    <Component faveNum={42} {...props} />
    )
  }
}

// App JS

import React from "react"
import { withFavoriteNumber } from './withFavoriteNumber'

function App(props) {
    return (
        <div>My favorite number is {props.faveNum}!</div>
    )
}

const ExtraProps = withFavoriteNumber(App)
export default ExtraProps