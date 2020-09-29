// HOC Component
import React from 'react'

export function withPointlessHOC(component) {
  const Component = component
  return function(props) {
      return (
          <Component {...props} />
      )
  }
}

// withExtraPropAdded(component)
import React from "react"

export function withExtraPropAdded(component) {
    const Component = component
    return function(props) {
        return (
            <Component anotherProp="Blah blah blah" {...props} />
        )
    }
}

// Main App Component
import React from "react"
import {withPointlessHOC} from "./withPointlessHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"

function App(props) {
    return (
        <div>Hello world!</div>
    )
}

const PointlessHOC = withExtraPropAdded(App)
export default PointlessHOC