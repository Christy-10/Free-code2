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
    if(process.env.MESSAGE_STYLE==="uppercase")
    {
        res.json({
            "message":"HELLO JSON"})
        }
        
        else{
            res.json({"message":"Hello json"})

        }
    
    });




console.log("Hello World");





































 module.exports = app;
