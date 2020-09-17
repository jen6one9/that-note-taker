var router = require("express").Router()
var db = require("../db/db.json")
var fs = require("fs")
const { maxHeaderSize } = require("http")
router.get("/api/notes",function(req,res){
db = JSON.parse(fs.readfilesync("./db.json", "utf8"))  //utf8 means reads in english format
console.log("get route",db)
res.json(db)
})
router.post("/api/notes",function(req,res){
    var data={
        id:Math.floor(Math.random()*100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(data)
    fs.writeFileSync("../db/db.json",JSON.stringify(db),function(){
        console.log("File Updated")
        console.log("post route",db)
        res.json(db)
    })
  
    })

module.exports = router //lowercase r for the var you create

//this page is where we manipulate the data (data-handling)

