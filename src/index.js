const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.listen(process.env.PORT || 8080, function() {
  console.log("Your node js server is running");
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Homepage"
  });
});

// Home page route
app.get("/wiki", function(req, res, next) {
  res.status(200).json({
    status: "success",
    message: "wiki new works!"
  });
});

// var http = require("http");

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
