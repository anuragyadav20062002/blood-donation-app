const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  console.log("hi")
})

router.post("/find-donor", (req, res) => {
  console.log(req.body)
  res.json({ message: "Hi register" })
})

module.exports = router
