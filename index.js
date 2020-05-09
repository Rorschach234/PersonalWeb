const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

var articleTitle = "keadilan"
var articleContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit. Morbi tristique senectus et netus et malesuada fames. Vel pharetra vel turpis nunc eget lorem dolor sed. Pellentesque habitant morbi tristique senectus et netus et. Sit amet purus gravida quis blandit. Aenean pharetra magna ac placerat. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Enim tortor at auctor urna. Hendrerit dolor magna eget est. Nibh venenatis cras sed felis eget velit. Gravida rutrum quisque non tellus orci ac. Odio ut enim blandit volutpat maecenas volutpat blandit. Est placerat in egestas erat imperdiet sed euismod nisi porta. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Gravida in fermentum et sollicitudin ac orci.Dolor magna eget est lorem. Aliquet nibh praesent tristique magna sit amet purus gravida. A condimentum vitae sapien pellentesque habitant morbi tristique. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Augue eget arcu dictum varius duis. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Id eu nisl nunc mi. Amet aliquam id diam maecenas ultricies mi. Fringilla ut morbi tincidunt augue interdum velit euismod. Varius quam quisque id diam vel. Dignissim suspendisse in est ante in nibh mauris. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Sed risus ultricies tristique nulla aliquet enim tortor at. Sed arcu non odio euismod lacinia at quis. Pellentesque nec nam aliquam sem et tortor consequat."

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
  res.render("home", {
    title: articleTitle,
    content: articleContent
  });
});

app.get("/blog", function(req, res){
  res.render("blog", {
    title: articleTitle,
    content: articleContent
  });
});

app.get("/gallery", function(req, res){
  res.render("gallery");
});

//var topImage = $(".alone1");

//topImage.animate({width: '500px', opacity: '0.8'}, "slow");


app.listen(process.env.PORT || 3000, function() {
  console.log("server started on port 3000");
});
