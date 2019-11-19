import React from "react"
import { usePosts } from "../hooks"
import { Link } from "react-router-dom"

export default (props) => {
  const posts = usePosts(props.match.params.slug)

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <p>
          <Link to={"/post/" + post.id}>{post.name}</Link>
        </p>
      ))}
    </div>
  )
}
