const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

//app

const app = express()

//db

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

//gautam//

// var MongoClient = require("mongodb").MongoClient
// var url =
//   "mongodb+srv://bloodlink:anurag123@cluster0.zhvhe.mongodb.net/bloodlink?retryWrites=true&w=majority"

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err
//   var dbo = db.db("mydb")
//   dbo
//     .collection("bloodlink")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err
//       console.log(result)
//       db.close()
//     })
// })
//

//route

app.get("/", (req, res) => {
  res.json({
    data: "hey you hit node API",
  })
})

//listen

app.listen(8000, () => {
  console.log("server is running on port 8000")
})
