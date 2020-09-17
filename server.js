var express = require("express")
var port = 3001
var app = express()  //this code initializes the router 

var api_routes = require("./routes/api_routes")
var html_routes = require("./routes/html_routes.js")

app.use(express.urlencoded({extended:true})) //we are passing a json object. this is required so you don't get an undefined error message
app.use(express.json()) //data format btwn front end and backend is json format
app.use(express.static("public")) //this is the reason why we put ALL front end files in the public folder. FOLDER STRUCTURE very important. 
app.use(api_routes)
app.use(html_routes)










app.listen(port, function(){
    console.log("app is ready on 3001")
})