import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime"
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   childer: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).
render(
reactElement
)
