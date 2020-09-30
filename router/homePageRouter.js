const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.get("/meetteam", (req, res) => {
    res.render("meetteam")
})

router.get("/contact", (req, res) => {
    res.render("contactUs")
})

router.get("/about", (req,res) => {
    res.render("about")
})

module.exports = router