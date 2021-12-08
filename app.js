//jshint esversion:6

const express = require("express");
const bodyParser = require("body-Parser");
const ejs = require("ejs");



const app = express();

app.set('view engine','ejs');

app.use(express.static("public"));

app.use('/css',express.static(__dirname + '/public'))
app.use('/java',express.static(__dirname + '/public'))




app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
 res.render("home")
 })






app.listen(3000, function(){
    console.log("server started on 3000");
})
