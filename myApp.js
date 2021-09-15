var express = require('express');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
let absolutePath = __dirname + "/views/index.html";
app.get("/",(req,res) => {
    res.sendFile(absolutePath)

})

console.log("Hello World");




































 module.exports = app;
