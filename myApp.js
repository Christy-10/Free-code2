var express = require('express');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
let absolutePath = __dirname + "/views/index.html";
  

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
    app.get("/now",function(req, res, next)  {
          // adding a new property to req object
          // in the middleware function
          req.string = "example";
          next();
        },function(req, res)  {
          // accessing the newly added property
          // in the main function
          res.send(req.string);
        }
      );
      function getTheCurrentTimeString()
      {
          return new Date().toString();
      }
      app.get("/now",function(req, res, next)  {
          req.time = getTheCurrentTimeString();
          next();
        },function(req, res)  {
          res.json({ time: req.time});
        });

    app.use(function middleware(req,res,next) 
    {
        console.log(req.method + " "+ req.path + " - "+ req.ip);
        next();
    });


console.log("Hello World");





































 module.exports = app;
