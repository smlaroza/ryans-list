import React, { useState } from "react"

export default (props) => {
  const [name, setName] = useState("")
  const [post, setPost] = useState("")
  function handleSubmit(e) {
    e.preventDefault()

    createPost(props.match.params.slug, name, post).then(() => {
      props.history.push("/" + props.match.params.slug)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">PostName</label>
        <br></br>
        <input type="text"></input>
      </form>
    </div>
  )
}
