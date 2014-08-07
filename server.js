var express = require("express");
var app = express();
var port = 3700;

require('./enableMogger')(express);

app.get("/", function(req, res){
  res.send("It works!");
});
 
app.listen(port);

console.log("Listening on port " + port);

