const router = require("express").Router()
const db = require("..db")
router.get("/:slug", (req, res, next) => {
  const slug = req.params.slug
  const sql = `
  SELECT * FROM posts p
  LEFT JOIN categories c ON p.category_id WHERE c.slug=?`
  db.query(sql, [slug], (err, results, fields) => {
    res.json(results)
  })
})
router.get("/post/:postId", (req, res, next) => {
  const postId = req.params.postId
  const sql = `SELECT * FROM posts WHERE id =?`
  db.query(sql, [postId], (err, results, fields) => {
    res.json(results)
  })
})
router.post("/single/postId", (req, res, next) => {
  const catId = req.bod.catId
  const name = req.bod.name
  const post = req.bod.post
  sql = `
  INSERT INTO posts (name,post,category_id)
  VALUES (?,?,?)`
})
