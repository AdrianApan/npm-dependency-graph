import React from "react"
import { Container } from "semantic-ui-react"

import "./App.scss"
import Search from "../Search"

function App() {
  
  return (
    <Container className="app">
      <Search />
    </Container>
  )
}

export default App