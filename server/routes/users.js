const router = require("express").Router()
const db = require("../db")

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id, name
  FROM categories
  WHERE parent_id IS NULL;`

  db.query(sql, (err, results, fields) => {
    console.log(results)
    res.json(results)
  })
})
router.get("/sub", (req, res, next) => {
  const sql = `SELECT name, parent_id, slug
  FROM categories
  WHERE parent_id IS NOT NULL`

  db.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

// router.post("/", (req, res, next) => {
//   const username = req.body.username
//   const password = req.body.password

//   const sql = `INSERT INTO users (username, password) VALUES (?, ?)`

//   db.query(sql, [username, password], (err, results, fields) => {
//     console.log("error", err)
//     console.log(results)
//   })
// }
module.exports = router
