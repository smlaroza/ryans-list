const createError = require("http-errors")
const express = require("express")
const userRouter = require("./routes/users")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

app.listen(8080, () => {
  console.log("Listening on port 8080")
})
