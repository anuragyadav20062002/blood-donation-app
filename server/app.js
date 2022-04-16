const express = require("express")

const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

//app

const app = express()
app.use(require("./route/auth"))
app.use(express.json())
//db
const User = require("./model/userSchema")
const password = process.env.DBPASSWORD

const DB =
  "mongodb+srv://bloodlink:anurag123@cluster0.zhvhe.mongodb.net/bloodlink?retryWrites=true&w=majority"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful")
  })
  .catch((err) => {
    console.log(err, "Connection cant be made")
  })
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

//middleware

const middleware = (req, res, next) => {
  console.log("my middleware")
  next()
}

//route

app.get("/", (req, res) => {
  res.json({
    data: "hey you hit node API",
  })
})

app.get("/find-donor", middleware, (req, res) => {
  res.send(`register here for finding donors`)
})
app.get("/register-donor", middleware, (req, res) => {
  res.send(`register here as a donor`)
})

//listen

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
