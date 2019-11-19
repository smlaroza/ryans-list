import React from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"

export default (props) => {
  const { categories } = useCats()
  return (
    <>
      {categories.map((cat) => (
        <div className="main">
          <div className="mainCat">
            <Link className="mainCatName" to={"/" + cat.slug}>
              <h2>{cat.name}</h2>
            </Link>
          </div>
          <div className="links">
            {cat.children.map((sub) => (
              <div className="subLink">
                <div className="innerSubLink">
                  <Link className="subCatName" to={"/" + sub.slug}>
                    {sub.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      ))}
    </>
  )
}
