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
    app.get("/now",(req, res, next) => {
          
          req.time=  new Date().toString();
          next();
        },(req, res) =>  {
          
          res.send({time: req.time});
        }
      );
      app.get("/name",(req,res)=>
      {
          res.json({name: req.query.first + " " + req.query.last});
      });
      app.get("/:word/echo",(req,res)=>
      {
          res.json({echo:req.params.word});
      });
      app.use(function middleware(req,res,next) 
    {
        console.log(req.method + " "+ req.path + " - "+ req.ip);
        next();
    });

    
    


console.log("Hello World");





































 module.exports = app;
