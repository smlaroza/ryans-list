import React from "react"
import { useUsers } from "../hooks"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./Main"

function App() {
  const { users, sub } = useUsers()

  console.log(users)

  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  )
}

export default App
