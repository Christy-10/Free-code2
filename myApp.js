var express = require('express');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
let absolutePath = __dirname + "/views/index.html";
app.get("/",(req,res) => {
    res.sendFile(absolutePath)

})
if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
app.get("/json", (req,res) => {
    res.json({"message": process.env.MESSAGE_STYLE=="uppercase" ? "HELLO JSON": "Hello json"})
})


console.log("Hello World");




































 module.exports = app;
