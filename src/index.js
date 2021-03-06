import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import * as serviceWorker from "./serviceWorker"
import "semantic-ui-css/semantic.min.css"

import App from "./components/App"
import "./styles/index.scss"

const getBasename = path => path.substr(0, path.lastIndexOf('/'))

ReactDOM.render(
  <Router basename={getBasename(window.location.pathname)}>
    <App />
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister()