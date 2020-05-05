const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//var topImage = $(".alone1");

//topImage.animate({width: '500px', opacity: '0.8'}, "slow");


app.listen(process.env.PORT || 3000, function() {
  console.log("server started on port 3000");
});
