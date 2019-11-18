import React from "react"
import { useUsers } from "../hooks"
import "../styles/styles.css"

function App() {
  const {
    users,
    subOne,
    subTwo,
    subThree,
    subFour,
    subFive,
    subSix,
    subSeven
  } = useUsers()

  console.log(users)

  return (
    <div classname="communityContainer">
      <p id="community">{users.name1}</p>

      {subOne.map((user) => (
        <p id="subCommunity" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  )
}

export default App
