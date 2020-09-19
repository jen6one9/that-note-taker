var router = require("express").Router()

var path = require("path")
// const { Router } = require("express") //uppercase R only with the Express package 
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html")) //when you dont have starter code, you use the <a> tags in the html to define your routes.
})
module.exports = router //remember: lowercase r  not uppercase R for the router for the var you created