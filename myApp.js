var express = require('express');
let  bodyParser = require('body-parser');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
let absolutePath = __dirname + "/views/index.html";
app.use(bodyParse.urlencoded({extended:false}));
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
      app.get("/name", function(req, res) {
        var firstName = req.query.first;
        var lastName = req.query.last;
        
        var { first: firstName, last: lastName } = req.query;

        res.json({
          name: `${firstName} ${lastName}`
        });
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
