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
      

    app.use(function middleware(req,res,next) 
    {
        console.log(req.method + " "+ req.path + " - "+ req.ip);
        next();
    });
    const middleware = (req, res, next) => {
        req.time = new Date().toString();
        next();
      };
      
      app.get("/now", middleware, (req, res) => {
        res.send({
          time: req.time
        });
      });


console.log("Hello World");





































 module.exports = app;
