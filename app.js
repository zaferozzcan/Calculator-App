const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.write("<h1>Calculator</h1>")
})
















app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
