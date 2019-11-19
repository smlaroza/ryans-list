import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Categories from "./categoryList"
import Posts from "./postList"
import CreatePost from "./postForm"
import Post from "./viewPost"
import "../styles/styles.css"

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/:slug" component={Posts} />
          <Route exact path="/:slug/post" component={CreatePost} />
          <Route exact path="/:slug/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
